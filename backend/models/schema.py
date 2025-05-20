from typing import List, Literal, Optional
from pydantic import BaseModel

class Pergunta(BaseModel):
    titulo: str
    texto: str

class RequisicaoEntrevista(BaseModel):
    texto: str
    modelo: Literal["openai", "gemini", "deepseek", "openrouter"]
    api_key: str
    perguntas: Optional[List[Pergunta]] = []

class RespostaAnalise(BaseModel):
    respostas: List[str]
