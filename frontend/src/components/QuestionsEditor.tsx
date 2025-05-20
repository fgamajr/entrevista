import React from 'react';

export default function QuestionsEditor({ perguntas, setPerguntas }: any) {
  const atualizar = (index: number, field: string, value: string) => {
    const nova = [...perguntas];
    nova[index][field] = value;
    setPerguntas(nova);
  };

  const adicionar = () => {
    setPerguntas([...perguntas, { titulo: "", texto: "" }]);
  };

  const remover = (index: number) => {
    const nova = perguntas.filter((_: any, i: number) => i !== index);
    setPerguntas(nova);
  };

  return (
    <div className="space-y-2">
      <label className="font-semibold">Perguntas:</label>
      {perguntas.map((p: any, i: number) => (
        <div key={i} className="border p-2 rounded space-y-1">
          <input
            value={p.titulo}
            onChange={e => atualizar(i, 'titulo', e.target.value)}
            className="w-full p-1 border rounded"
            placeholder="Título"
          />
          <textarea
            value={p.texto}
            onChange={e => atualizar(i, 'texto', e.target.value)}
            className="w-full p-1 border rounded"
            placeholder="Texto da pergunta"
          />
          <button onClick={() => remover(i)} className="text-sm text-red-600 hover:underline">Remover</button>
        </div>
      ))}
      <button onClick={adicionar} className="text-sm text-blue-600 hover:underline">+ Adicionar pergunta</button>
    </div>
  );
}
