import React from 'react';

export default function TextInput({ texto, setTexto }: any) {
  return (
    <div>
      <label className="block font-semibold mb-1">Texto da entrevista:</label>
      <textarea
        value={texto}
        onChange={e => setTexto(e.target.value)}
        className="w-full h-40 p-2 border rounded"
      />
    </div>
  );
}
