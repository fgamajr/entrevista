from services.ai_providers.openai_provider import run_openai
from services.ai_providers.gemini_provider import run_gemini
from services.ai_providers.openrouter_provider import run_openrouter
from services.ai_providers.deepseek_provider import run_deepseek

async def chamar_modelo(modelo: str, api_key: str, pergunta: str, texto: str, model_custom: str = "") -> str:
    prompt = f"Texto da entrevista:\n\n{texto}\n\nPergunta: {pergunta}"

    if modelo == "openai":
        return await run_openai(api_key, prompt)
    elif modelo == "gemini":
        return await run_gemini(api_key, prompt)
    elif modelo == "deepseek":
        print("✅ Enviando para DeepSeek...")
        return await run_deepseek(api_key, prompt)

    elif modelo == "openrouter":
        return await run_openrouter(api_key, prompt, model=model_custom or "mistral")
    else:
        raise ValueError("Modelo não suportado.")
