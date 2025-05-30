"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios'; // Added import

export default function Page() {
    const [teaEntries, setTeaEntries] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = '/api/tea-entries';

        async function fetchTeaEntries() {
            try {
                const response = await axios.get(url);
                const data = response.data;
                if (data.error) {
                    throw new Error(data.error);
                }
                setTeaEntries(data.data || []);
            } catch (err) {
                setError('Failed to fetch tea entries.');
                console.error(err);
            }
        }

        fetchTeaEntries();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="p-4 text-green-950 dark:text-green-100">
            <h1 className="text-2xl font-bold mb-4">Tea Collection</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {teaEntries.map((entry) => (
                    <div key={entry.id} className="border border-gray-300 p-4 rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold ">{entry.teaName}</h2>
                        <p className="dark:text-green-200">{entry.description[0]?.children[0]?.text || 'No description available'}</p>
                        <p className="mt-2 font-medium">
                            <strong>Rating:</strong> {entry.rating}
                        </p>
                        <Link href={`/collection/${entry.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">Open Page</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
