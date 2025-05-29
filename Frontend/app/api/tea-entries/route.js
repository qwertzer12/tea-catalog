import { NextResponse } from 'next/server';

export async function GET() {
    const url = process.env.BACKEND_ADDRESS + 'tea-entries?populate=*';
    const options = {
        method: 'GET',
        headers: {
            authorization: process.env.API_TOKEN
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            return NextResponse.json({ error: response.statusText }, { status: response.status });
        }
        const data = await response.json();
        return NextResponse.json(data);
    } catch (err) {
        console.error('Error fetching tea entries:', err);
        return NextResponse.json({ error: 'Failed to fetch tea entries' }, { status: 500 });
    }
}
