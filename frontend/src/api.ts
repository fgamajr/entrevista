export async function enviarEntrevista(payload: any): Promise<{ respostas: string[] }> {
  const response = await fetch('/avaliar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Erro ao enviar entrevista');
  }

  return await response.json();
}
