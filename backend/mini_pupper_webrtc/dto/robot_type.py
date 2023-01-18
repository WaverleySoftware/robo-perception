from pydantic import BaseModel
from ..model.robot_type import RobotType


class RobotTypeDTO(BaseModel):
    id: int
    label: RobotType
