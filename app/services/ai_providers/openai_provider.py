from openai import OpenAI

async def run_openai(api_key: str, prompt: str) -> str:
    client = OpenAI(api_key=api_key)
    response = client.chat.completions.create(
        model="gpt-4.1",
        messages=[
            {"role": "system", "content": "Você é um assistente de RH analisando entrevistas."},
            {"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message.content.strip()
