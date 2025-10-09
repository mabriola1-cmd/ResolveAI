import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function POST(req: NextRequest) {
  const data = await req.json();
  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }
  await prisma.contactMessage.create({ data });
  return NextResponse.json({ ok: true });
}
