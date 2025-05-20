import React from 'react';

export default function ModelSelect({ modelo, setModelo, apiKey, setApiKey }: any) {
  return (
    <div className="flex gap-4 items-center">
      <select value={modelo} onChange={e => setModelo(e.target.value)} className="p-2 border rounded">
        <option value="openai">OpenAI (gpt-4.1)</option>
        <option value="gemini">Gemini</option>
        <option value="deepseek">DeepSeek</option>
        <option value="openrouter">OpenRouter (custom)</option>
      </select>
      <input
        type="password"
        value={apiKey}
        onChange={e => setApiKey(e.target.value)}
        placeholder="API Key"
        className="flex-1 p-2 border rounded"
      />
    </div>
  );
}
