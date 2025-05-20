import React, { useState } from 'react';
import TextInput from './components/TextInput';
import ModelSelect from './components/ModelSelect';
import QuestionsEditor from './components/QuestionsEditor';
import ReportViewer from './components/ReportViewer';
import { enviarEntrevista } from './api';

const defaultQuestions = [
  { titulo: "Trajetória Profissional", texto: "Faça um resumo da trajetória profissional do candidato." },
  { titulo: "Pontos Fortes e Fracos", texto: "Quais são os pontos fortes e fracos mencionados ou percebidos?" },
  { titulo: "Postura e Comunicação", texto: "Avalie a postura e comunicação do candidato." },
  { titulo: "Conclusão Geral", texto: "Gere uma conclusão geral em tom profissional sobre o candidato." }
];

export default function App() {
  const [texto, setTexto] = useState('');
  const [modelo, setModelo] = useState('openai');
  const [apiKey, setApiKey] = useState('');
  const [perguntas, setPerguntas] = useState(defaultQuestions);
  const [respostas, setRespostas] = useState<string[] | null>(null);

  const handleSubmit = async () => {
    const payload = { texto, modelo, api_key: apiKey, perguntas };
    const resultado = await enviarEntrevista(payload);
    setRespostas(resultado.respostas);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Análise de Entrevista com IA</h1>
      <ModelSelect modelo={modelo} setModelo={setModelo} apiKey={apiKey} setApiKey={setApiKey} />
      <TextInput texto={texto} setTexto={setTexto} />
      <QuestionsEditor perguntas={perguntas} setPerguntas={setPerguntas} />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Gerar Relatório
      </button>
      {respostas && <ReportViewer respostas={respostas} />}
    </div>
  );
}
