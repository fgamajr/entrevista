from openai import OpenAI

client = OpenAI(api_key="sk-801a49d767e34a8ca66128411b73b2d6", base_url="https://api.deepseek.com")

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)
