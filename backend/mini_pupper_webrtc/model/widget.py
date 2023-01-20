from pydantic import BaseModel


class Widget(BaseModel):
    id: int
    label: str
    name: str
    selected: bool = True
