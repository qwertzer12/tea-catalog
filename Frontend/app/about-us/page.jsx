export default function Page() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
            
            <div className="max-w-3xl mx-auto space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
                    <p className="text-lg leading-relaxed">My name is Andrew Chabin, but you can call me AJ. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, id iusto consequatur incidunt quos hic officia fuga delectus modi quaerat vero consectetur reprehenderit praesentium accusamus tempore possimus ratione, harum nemo.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">Education</h2>
                    <p className="text-lg leading-relaxed">I am currently a student at Cairn University, located in Langhorne, PA. I am diligently working towards a Bachelor's degree in Computer Science. My studies have provided me with a strong foundation in software engineering principles, data structures, algorithms, and various programming languages.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">Skills</h2>
                    <ul className="list-disc list-inside text-lg space-y-1">
                        <li>Add items</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">Projects & Experience</h2>
                    <p className="text-lg leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur magni repellat praesentium consequuntur optio sunt ducimus ad ipsum voluptas voluptatibus quidem, beatae labore quas, quasi nesciunt a sit nam repudiandae.</p>
                    {/* Example of how to list projects:
                    <div className="mt-2 space-y-2">
                        <div className="p-4 border rounded-lg">
                            <h3 className="text-xl font-medium">Project Title 1</h3>
                            <p className="text-md text-gray-700">Short description of the project and technologies used.</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <h3 className="text-xl font-medium">Project Title 2</h3>
                            <p className="text-md text-gray-700">Short description of the project and technologies used.</p>
                        </div>
                    </div>
                    */}
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">Hobbies & Interests</h2>
                    <p className="text-lg leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et ipsa labore deserunt recusandae. Fugiat ratione atque dignissimos, ipsa eius eos quae tempore quisquam nam dolor corporis, quas molestias dolores.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">Future Goals</h2>
                    <p className="text-lg leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus iure perspiciatis tempora? Inventore sit, laudantium, autem esse amet laboriosam excepturi facere consequatur, earum illo mollitia temporibus necessitatibus ipsum accusantium quod?</p>
                </section>

                <section className="text-center mt-10">
                    <p className="text-lg">Feel free to connect with me!</p>
                    {/* Add links to LinkedIn, GitHub, etc. if desired */}
                </section>
            </div>
        </main>
    )
}