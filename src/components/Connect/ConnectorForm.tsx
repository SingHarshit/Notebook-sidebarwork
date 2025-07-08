'use client';

import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { toast } from 'react-toastify';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function ConnectorForm() {
  const { setSchema, setConnection } = useAppContext();

  const [selectedDb, setSelectedDb] = useState('PostgreSQL');
  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    try {
      setLoading(true);
      await delay(500);

      const schemaModule = await import('@/lib/mockSchema');
      const schema = schemaModule.mockSchema;
      setSchema(schema);

      setConnection({ db: selectedDb, host, port, password });

      toast.success(`✅ Connected to ${selectedDb} at ${host}:${port} (password set)`, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    } catch (err) {
      console.error('Connection failed:', err);
      toast.error(`❌ Connection failed to ${selectedDb} at ${host}:${port}`, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block mb-1 font-semibold">Database Type</label>
        <select
          value={selectedDb}
          onChange={(e) => setSelectedDb(e.target.value)}
          className="w-full border rounded px-3 py-2"
        >
          <option>PostgreSQL</option>
          <option>MySQL</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold">Host</label>
        <input
          type="text"
          value={host}
          onChange={(e) => setHost(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g. localhost"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Port</label>
        <input
          type="text"
          value={port}
          onChange={(e) => setPort(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="e.g. 5432"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded px-3 py-2"
          placeholder="your DB password"
        />
      </div>

      <button
        onClick={handleConnect}
        disabled={loading}
        className={`w-full py-2 rounded text-white ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {loading ? 'Connecting...' : 'Connect'}
      </button>
    </div>
  );
}
