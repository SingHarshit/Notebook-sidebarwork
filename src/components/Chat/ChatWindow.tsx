'use client';

import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';

export default function ChatWindow() {
  const { messages, addMessage } = useAppContext();
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    addMessage({ text: input, user: 'me' });
    setInput('');
  };

  return (
    <div className="flex flex-col h-full border rounded p-4">
      {/* Chat history */}
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`px-3 py-2 rounded w-fit ${
              msg.user === 'me'
                ? 'ml-auto bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input box */}
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          className="flex-1 border rounded px-3 py-2"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
