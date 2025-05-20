import React from 'react';

export default function TextInput({ texto, setTexto }) {
  return (
    <div>
      <label className="block font-medium mb-1">Texto da entrevista:</label>
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        rows={6}
        className="w-full border rounded px-3 py-2"
        placeholder="Cole aqui a transcrição ou resumo da entrevista..."
      />
    </div>
  );
}