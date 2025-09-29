import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  // Mock audit log retrieval
  const mockLogs = [
    { level: 'info', message: 'API Access', meta: { userId: '1', method: 'GET', route: '/api/some-route' }, timestamp: new Date() },
    { level: 'error', message: 'Unauthorized Access', meta: { userId: 'anonymous', method: 'GET', route: '/api/protected' }, timestamp: new Date() }
  ];

  return NextResponse.json({
    logs: mockLogs,
    pagination: {
      total: mockLogs.length,
      page: 1,
      limit: 10,
      totalPages: 1,
    },
  });
}

export async function POST(req) {
  const { level, message, meta } = await req.json();
  console.log(`[AUDIT LOG] Level: ${level}, Message: ${message}`, meta);
  return new Response(JSON.stringify({ status: "logged" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
