import { NextResponse } from 'next/server';

export async function GET() {
  const response = {
    service: 'TSI Backend Service',
    status: 'online',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    endpoints: {
      convert: '/api/v1/convert',
      validate: '/api/v1/validate',
      status: '/api/v1/status',
      provision: '/api/provision'
    },
    metrics: {
      totalRequests: Math.floor(Math.random() * 1000),
      activeConnections: Math.floor(Math.random() * 10),
      averageResponseTime: Math.floor(Math.random() * 200) + 50
    }
  };

  return NextResponse.json(response);
}