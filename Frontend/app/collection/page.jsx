"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
    const [teaEntries, setTeaEntries] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'http://192.168.1.159:1337/api/tea-entries';
        const options = {
            method: 'GET',
            headers: {
                authorization: 'Bearer 26b4a8f688872c786ecaab47542910dacbec0d27da144f302d021f80bf7940c93d2686cf0066d9a29300dcb0bc4ee78b11a53e673664b5f378680c48a3caaa05945920420ca958fd741e7158104ed4b5081b643bcac67f979eacf17d729d614d13322b6fc4b75c6a53b6a1a85518b26bd77ac6dc222095072f38fc996f45d331'
            }
        };

        async function fetchTeaEntries() {
            try {
                const response = await fetch(url, options);
                const data = await response.json();
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