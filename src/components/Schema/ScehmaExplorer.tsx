'use client';

import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import TableNode from './TableNode';

export default function SchemaExplorer() {
  const { schema } = useAppContext();

  if (!schema) {
    return <div className="text-gray-500">No schema loaded.</div>;
  }

  return (
    <div className="space-y-4">
      {schema.tables.map((tableObj: any) => (
        <TableNode
          key={tableObj.name}
          table={tableObj.name}
          columns={tableObj.columns}
        />
      ))}
    </div>
  );
}
