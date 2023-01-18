import asyncio

from typing import Dict, List

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

from .dto.offer_payload import OfferPayload
from .dto.webrtc_response import WebRTCResponse
from .dto.robot_type import RobotTypeDTO

from .model.ros_bridge import RosBridge
from .model.camera_type import CameraType
from .model.peer_connection import PeerConnection
from .model.uvicorn_logger import logger
from .model.robot_type import RobotType
from .model.robot_settings import RobotSettings
from .model.widget import Widget

ros_bridge: RosBridge = RosBridge()
peer_connections: Dict[str, PeerConnection] = {}
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True
)


# ToDo: add DB support and replace hardcoded values
@app.get('/robot_settings')
def get_robots() -> List[RobotSettings]:
    return [
        RobotSettings(id=1, name='MiniPupper', type=1),
        RobotSettings(id=2, name='Husky', type=2, speed_step=20)
    ]


@app.get('/robot_types')
def get_robot_types() -> List[RobotTypeDTO]:
    return [RobotTypeDTO(id=id, label=robot_type.value) for id, robot_type in enumerate(RobotType)]


@app.get('/widgets')
def get_widgets() -> List[Widget]:
    return [
        Widget(id=1, label='Screen', name='screen'),
        Widget(id=2, label='Battery', name='battery'),
        Widget(id=3, label='Robot\'s Speed', name='speed'),
        Widget(id=4, label='Additional actions', name='actions')
    ]


@app.post('/offer', description='Establish WebRTC connection', response_model=WebRTCResponse)
async def offer(offer_payload: OfferPayload, request: Request):
    if offer_payload.options.camera_type == CameraType.SIMULATOR:
        ros_bridge.connect()

    host = request.client.host
    peer_connection = peer_connections.get(host, None)

    if peer_connection:
        await peer_connection.cleanup()

    peer_connection = PeerConnection(
        ros_bridge,
        offer_payload,
        on_close=lambda: on_connection_close(host)
    )
    peer_connections[host] = peer_connection
    
    await peer_connection.offer()
    logger.info(f"Created offer for {host}")
    return await peer_connection.answer()


@app.on_event("startup")
def startup_event():
    ros_bridge.connect()


@app.on_event("shutdown")
async def on_shutdown():
    coroutines = {pc.cleanup() for _, pc in peer_connections.items()}
    await asyncio.gather(*coroutines)
    ros_bridge.shutdown()


def on_connection_close(host):
    del peer_connections[host]
