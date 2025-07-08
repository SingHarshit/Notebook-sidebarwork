'use client';

import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';

interface TableNodeProps {
  table: string;
  columns: string[];
}

export default function TableNode({ table, columns }: TableNodeProps) {
  const [open, setOpen] = useState(false);
  const { runQuery } = useAppContext();

  return (
    <div className="mb-3 border rounded p-3 shadow-sm">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setOpen(!open)}
          className="text-left font-semibold"
        >
          {open ? '▼' : '▶'} {table}
        </button>
        <button
          onClick={() => runQuery(`SELECT * FROM ${table} LIMIT 10;`)}
          className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Preview
        </button>
      </div>

      {open && (
        <ul className="mt-2 ml-4 list-disc text-sm text-gray-700">
          {columns.map(col => (
            <li key={col}>{col}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
