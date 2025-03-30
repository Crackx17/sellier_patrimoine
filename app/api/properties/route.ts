// app/api/properties/route.ts
import { NextResponse } from 'next/server'

const APIMO_API_BASE_URL = 'https://api.apimo.pro'
const AGENCY_ID = '21173'
const CREDENTIALS = '4257:0627c599ce5906231c335be1039205d3d72c8731'
const AUTH_HEADER = `Basic ${Buffer.from(CREDENTIALS).toString('base64')}`

export async function GET() {
  console.log('📡 API CALL → GET /api/properties')

  try {
    const res = await fetch(`${APIMO_API_BASE_URL}/agencies/${AGENCY_ID}/properties`, {
      headers: {
        Authorization: AUTH_HEADER,
        Accept: 'application/json',
      },
      cache: 'no-store',
    })

    const text = await res.text()

    if (!res.ok) {
      console.error('❌ Apimo API error:', res.status, res.statusText)
      return NextResponse.json({ error: 'Failed to fetch from Apimo' }, { status: 500 })
    }

    const data = JSON.parse(text)

    return NextResponse.json(data)
  } catch (err) {
    console.error('💥 Unexpected error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
