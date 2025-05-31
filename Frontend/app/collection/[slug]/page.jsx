"use client";
import axios from "axios";
import { useEffect, useState, use as reactUse } from "react";

export default function Page({ params }) {
    // Unwrap params if it's a Promise
    const unwrappedParams = typeof params?.then === "function" ? reactUse(params) : params;
    const slug = unwrappedParams?.slug;

    const [teaEntry, setTeaEntry] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!slug) return;
        const url = `/api/tea-slug?slug=${slug}`;

        async function fetchTeaEntry() {
            try {
                const response = await axios.get(url);
                const data = response.data;
                if (data.error) {
                    throw new Error(data.error);
                }
                setTeaEntry(data.data?.[0] || null);
            } catch (err) {
                setError('Failed to fetch tea entry.');
                console.error(err);
            }
        }

        fetchTeaEntry();
    }, [slug]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!teaEntry) {
        return <div>Loading...</div>;
    }

    // Render description with support for paragraphs and lists
    function renderDescription(descArr) {
        if (!Array.isArray(descArr)) return 'No description available';
        return descArr.map((desc, i) => {
            if (desc.type === "paragraph") {
                // Paragraph: render each child as a block, even if blank
                return desc.children.map((child, j) => (
                    <div key={`p-${i}-${j}`} className="mb-3">
                        {child?.text?.trim() ? child.text : <>&nbsp;</>}
                    </div>
                ));
            }
            if (desc.type === "list") {
                return (
                    <ul key={`ul-${i}`} className="mb-3 list-disc list-inside">
                        {desc.children.map((item, j) => (
                            <li key={`li-${i}-${j}`}>
                                {item.children?.map((child, k) =>
                                    child?.text?.trim() ? child.text : <>&nbsp;</>
                                )}
                            </li>
                        ))}
                    </ul>
                );
            }
            return null;
        });
    }

    return (
        <div className="p-4 text-green-950 dark:text-green-100">
            <h1 className="text-2xl font-bold mb-4">{teaEntry.teaName || "Tea Entry"}</h1>
            <div className="dark:text-green-200">
                {renderDescription(teaEntry.description)}
            </div>
            <p className="mt-2 font-medium">
                <strong>Rating:</strong> {teaEntry.rating}
            </p>
        </div>
    );
}