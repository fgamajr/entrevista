import React from 'react';

export default function ReportViewer({ respostas }: any) {
  return (
    <div className="mt-6 bg-white p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Relatório Gerado</h2>
      <div className="space-y-4 whitespace-pre-wrap">
        {respostas.map((r: string, i: number) => (
          <div key={i}><strong>{i + 1}.</strong> {r}</div>
        ))}
      </div>
    </div>
  );
}
