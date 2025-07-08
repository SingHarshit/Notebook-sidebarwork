'use client';

import React from 'react';

interface QueryOutputProps {
  data: Record<string, any>[];
}

export default function QueryOutput({ data }: QueryOutputProps) {
  if (!data || data.length === 0) {
    return <div className="text-gray-500">No data found.</div>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            {headers.map(h => (
              <th key={h} className="border px-4 py-2 text-left font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {headers.map(h => (
                <td key={h} className="border px-4 py-2">
                  {row[h]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
