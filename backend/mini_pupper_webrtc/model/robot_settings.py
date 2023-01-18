from pydantic import BaseModel


class RobotSettings(BaseModel):
    id: int
    name: str
    type: int
    speed_step: int = 1
    speed_min: int = 0
    speed_max: int = 100
