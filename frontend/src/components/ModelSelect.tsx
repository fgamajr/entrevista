import React from 'react';

export default function ModelSelect({ modelo, setModelo, apiKey, setApiKey }) {
  return (
    <div className="space-y-2">
      <label className="block font-medium">Modelo de IA:</label>
      <div className="flex flex-col sm:flex-row gap-2">
        <select
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:w-1/2"
        >
          <option value="openai">OpenAI (gpt-4.1)</option>
          <option value="deepseek">DeepSeek</option>
          <option value="gemini">Gemini</option>
          <option value="openrouter">OpenRouter</option>
        </select>
        <input
          type="text"
          placeholder="API Key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="border rounded px-3 py-2 w-full sm:flex-1"
        />
      </div>
    </div>
    );
}