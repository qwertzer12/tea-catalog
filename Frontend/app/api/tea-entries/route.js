import { NextResponse } from 'next/server';
import axios from 'axios'; // Added import

export async function GET() {
    const url = process.env.BACKEND_ADDRESS + 'tea-entries?populate=*';
    const options = {
        headers: {
            authorization: process.env.API_TOKEN
        }
    };

    try {
        const response = await axios.get(url, options);
        const data = response.data;
        return NextResponse.json(data);
    } catch (err) {
        console.error('Error fetching tea entries:', err);
        const status = err.response?.status || 500;
        const message = err.response?.statusText || 'Failed to fetch tea entries';
        return NextResponse.json({ error: message }, { status });
    }
}
