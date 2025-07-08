import { NextResponse } from 'next/server';
import { runQuery } from '@/lib/queryRunner';

export async function POST(req: Request) {
  await new Promise(resolve => setTimeout(resolve, 300)); // simulate latency

  const body = await req.json();

  if (!body.query || typeof body.query !== 'string') {
    return NextResponse.json({ error: 'Invalid query' }, { status: 400 });
  }

  const data = runQuery(body.query);

  return NextResponse.json({ data }, { status: 200 });
}
