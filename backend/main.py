from fastapi import FastAPI, HTTPException
from models.schema import RequisicaoEntrevista, RespostaAnalise, Pergunta
from services.prompts import DEFAULT_PERGUNTAS
from services.ai_dispatcher import chamar_modelo

app = FastAPI()

@app.post("/avaliar", response_model=RespostaAnalise)
async def avaliar_entrevista(payload: RequisicaoEntrevista):
    perguntas = payload.perguntas or [Pergunta(**p) for p in DEFAULT_PERGUNTAS]
    respostas = []

    try:
        for p in perguntas:
            resposta = await chamar_modelo(payload.modelo, payload.api_key, p.texto, payload.texto)
            respostas.append(resposta)
        return RespostaAnalise(respostas=respostas)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
