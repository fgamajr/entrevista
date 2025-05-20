from openai import OpenAI
import httpx

custom_http_client = httpx.Client(verify=False, timeout=30.0)

async def run_deepseek(api_key: str, prompt: str) -> str:
    client = OpenAI(
        api_key=api_key,
        base_url="https://api.deepseek.com",
        http_client=custom_http_client
    )
    response = client.chat.completions.create(
        model="deepseek-chat",
        messages=[
            {"role": "system", "content": "Você é um assistente de RH analisando entrevistas."},
            {"role": "user", "content": prompt}
        ],
        stream=False
    )
    return response.choices[0].message.content.strip()
