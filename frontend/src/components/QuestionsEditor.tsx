import React from 'react';

export default function QuestionsEditor({ perguntas, setPerguntas }) {
  const remover = (index: number) => {
    const novas = [...perguntas];
    novas.splice(index, 1);
    setPerguntas(novas);
  };

  const atualizar = (index: number, key: string, valor: string) => {
    const novas = [...perguntas];
    novas[index][key] = valor;
    setPerguntas(novas);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Perguntas:</h2>
      {perguntas.map((p, i) => (
        <div key={i} className="border rounded p-3 space-y-2 bg-gray-50 shadow-sm">
          <input
            value={p.titulo}
            onChange={(e) => atualizar(i, 'titulo', e.target.value)}
            placeholder="Título"
            className="w-full border px-2 py-1 rounded"
          />
          <textarea
            value={p.texto}
            onChange={(e) => atualizar(i, 'texto', e.target.value)}
            placeholder="Pergunta"
            className="w-full border px-2 py-1 rounded"
          />
          <button onClick={() => remover(i)} className="text-red-600 text-sm">Remover</button>
        </div>
      ))}
    </div>
  );
}