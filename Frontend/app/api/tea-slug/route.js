import { NextResponse } from 'next/server';
import axios from 'axios';
import qs from 'qs';

export async function GET(request) {
    // Extract slug from query parameters
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    if (!slug) {
        return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 });
    }

    const ourQuery = qs.stringify({
        filters: {
            slug: slug
        }
    });

    const url = process.env.BACKEND_ADDRESS + `tea-entries?${ourQuery}`;
    const options = {
        params: { populate: '*' },
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
