import Link from "next/link"
export default function Page() {
    return (
        <div className="container mx-auto px-4 py-8 text-center">
            <h1 className="text-4xl font-bold text-green-800 dark:text-green-300 mb-6">
                Welcome to My Tea Collection
            </h1>
            <div className="max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                    Hi there! This is a site to display many of my teas.
                    I'm excited to share the many different types that I've discovered.
                    Whether you're a tea enthusiast like me or just starting your tea journey,
                    I invite you to explore my selection.
                </p>
                <Link 
                    href={"/collection"} 
                    className="inline-block bg-green-600 dark:bg-green-800 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300 dark:hover:bg-green-600"
                >
                    Explore the Collection
                </Link>
            </div>
        </div>
    )
}