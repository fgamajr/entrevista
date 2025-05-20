# 📊 Entrevista IA – Análise de Candidatos com Modelos de IA

Este projeto permite analisar entrevistas de emprego utilizando IA generativa (OpenAI, Gemini, DeepSeek, OpenRouter), com backend em **FastAPI** e frontend em **React + Tailwind**.

---

## 📁 Estrutura do Projeto

entrevista/
├── backend/ ← API FastAPI com suporte a múltiplos modelos
│ ├── app/
│ ├── Dockerfile
│ ├── fly.toml
│ └── requirements.txt
└── frontend/ ← Interface Web com React + Tailwind
├── src/
├── index.html
└── package.json


---

## 🚀 Backend (FastAPI)

### 📦 Requisitos
- Python 3.11+
- [Uvicorn](https://www.uvicorn.org/)
- [Fly.io CLI](https://fly.io/docs/hands-on/install-flyctl/)

### ▶ Rodar local

```bash
cd backend
uvicorn app.main:app --reload

cd backend
flyctl launch    # apenas na primeira vez
flyctl deploy    # para atualizar

flyctl secrets set OPENAI_API_KEY=sk-xxxxx

💻 Frontend (React + Tailwind)
📦 Requisitos
Node.js 18+

npm ou yarn

▶ Rodar local
bash
Copiar
Editar
cd frontend
npm install
npm run dev

☁️ Deploy opcional (ex: Vercel)
Suba o conteúdo da pasta frontend/ como projeto React normal.

🔐 Modelos Suportados
Provedor	Identificador (modelo)
OpenAI	openai
Gemini	gemini
DeepSeek	deepseek
OpenRouter	openrouter

📝 Customização
Você pode editar as perguntas antes de enviar, e fornecer sua própria API Key diretamente pela interface.

🤝 Contribuição
Pull requests são bem-vindos! 🌟

yaml
Copiar
Editar

---

