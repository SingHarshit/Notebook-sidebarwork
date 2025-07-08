import { mockData } from './mockData';

export function runQuery(query: string) {
  // Simple regex to extract table name after 'FROM'
  const tableMatch = query.match(/FROM\s+(\w+)/i);

  if (!tableMatch) {
    console.warn('No table found in query:', query);
    return [];
  }

  const table = tableMatch[1];

  if (!mockData[table]) {
    console.warn(`No data for table: ${table}`);
    return [];
  }

  return mockData[table];
}
