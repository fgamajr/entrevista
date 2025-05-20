import httpx

async def run_openrouter(api_key: str, prompt: str, model: str = "deepseek/deepseek-v3-base") -> str:
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://yourapp.com"
    }
    data = {
        "model": model,
        "messages": [
            {"role": "system", "content": "Você é um assistente de RH analisando entrevistas."},
            {"role": "user", "content": prompt}
        ]
    }
    async with httpx.AsyncClient() as client:
        response = await client.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=data)
        response.raise_for_status()
        return response.json()["choices"][0]["message"]["content"]
