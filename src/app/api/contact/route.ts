import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const body = Object.fromEntries(formData);

  const response = await fetch('https://api.netlify.com/api/v1/sites/' + process.env.NETLIFY_SITE_ID + '/forms', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NETLIFY_API_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(body as any).toString()
  });

  if (response.ok) {
    return NextResponse.json({ message: 'Form submitted successfully' });
  } else {
    const errorText = await response.text();
    return NextResponse.json({ message: `Form submission failed: ${errorText}` }, { status: response.status });
  }
}