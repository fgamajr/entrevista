import React, { useState } from 'react';
import ModelSelect from './components/ModelSelect';
import TextInput from './components/TextInput';
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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const resultado = await enviarEntrevista({ texto, modelo, api_key: apiKey, perguntas });
    setRespostas(resultado.respostas);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-6 bg-white shadow-lg rounded-xl mt-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-800">📋 Análise de Entrevista com IA</h1>
      <ModelSelect modelo={modelo} setModelo={setModelo} apiKey={apiKey} setApiKey={setApiKey} />
      <TextInput texto={texto} setTexto={setTexto} />
      <QuestionsEditor perguntas={perguntas} setPerguntas={setPerguntas} />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full sm:w-auto bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
      >
        {loading ? 'Analisando...' : 'Gerar Relatório'}
      </button>
      {respostas && <ReportViewer respostas={respostas} />}
    </div>
  );
}