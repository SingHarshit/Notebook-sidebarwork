'use client'; // only if using app router. remove otherwise.

import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import ConnectorForm from './Connect/ConnectorForm';
import SchemaExplorer from './Schema/ScehmaExplorer';
import ChatWindow from './Chat/ChatWindow';

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('connect');
  const { connection, schema } = useAppContext();
  const { setSchema, setMessages, setConnection } = useAppContext();

  const tabs = [
    { name: 'Connect', key: 'connect', disabled: false },
    { name: 'Schema', key: 'schema', disabled: !schema },
    { name: 'Chat', key: 'chat', disabled: !schema }
  ];

  return (
    <div className="w-64 h-screen border-r p-4 flex flex-col bg-gray-50">
      <div className="flex flex-col space-y-2 mb-6">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => !tab.disabled && setActiveTab(tab.key)}
            disabled={tab.disabled}
            className={`text-left px-3 py-2 rounded 
              ${activeTab === tab.key ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}
              ${tab.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-auto">
        {activeTab === 'connect' && <ConnectorForm />}
        {activeTab === 'schema' && schema && <SchemaExplorer />}
        {activeTab === 'chat' && schema && <ChatWindow />}
      </div>
      <div className="mt-6">
        <button
          onClick={() => {
            localStorage.removeItem('schema');
            localStorage.removeItem('messages');
            setSchema(null);
            setMessages([]);
            setConnection(null);
          }}
          className="w-full py-2 rounded bg-red-500 hover:bg-red-600 text-white"
        >
          Reset App
        </button>
      </div>
    </div>
  );
}
