from enum import Enum


class RobotType(str, Enum):
    LEGGED = 'Legged'
    WHEELED = 'Wheeled'
