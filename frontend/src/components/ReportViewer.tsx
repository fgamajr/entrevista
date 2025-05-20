import React from 'react';

export default function ReportViewer({ respostas }) {
  return (
    <div className="space-y-4 mt-4 bg-green-50 border border-green-200 p-4 rounded">
      <h2 className="text-lg font-bold text-green-800">📄 Relatório Gerado</h2>
      {respostas.map((r, i) => (
        <div key={i} className="bg-white border rounded shadow px-4 py-3">
          <p>{r}</p>
        </div>
      ))}
    </div>
  );
}