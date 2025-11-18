import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Mock conversion response for now
    const response = {
      id: `conversion_${Date.now()}`,
      status: 'completed',
      inputFormat: 'JSON',
      outputFormat: body.outputFormat || 'SKDUPD',
      processedAt: new Date().toISOString(),
      result: {
        data: `UNA:+.? 'UNH+1+SKDUPD:D:96A:UN:2.3'BGM+11+${Date.now()}+9'DTM+137:${new Date().toISOString().split('T')[0]}:102'UNT+4+1'`,
        size: 256,
        records: 1
      }
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    service: 'TSI Conversion API',
    version: '1.0.0',
    supportedFormats: ['SKDUPD', 'TSDUPD', 'GTFS'],
    status: 'online'
  });
}