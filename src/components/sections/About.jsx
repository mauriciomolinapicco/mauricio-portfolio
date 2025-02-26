import RevealOnScroll from "../RevealOnScroll";


function About() {
    const backendSkills = ['Python', 'Django', 'FastAPI', 'SQL', 'Docker', 'AWS', 'RESTful APIs'];
    const frontendSkills = ['Javascript', 'React', 'Tailwind', 'HTML', 'CSS']

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold md-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center mb-8">About me</h2>
        
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                <p className="mb-4">Hi, I'm Mauricio Molina Picco, a Full Stack Engineer with a passion for creating efficient, scalable web applications. I specialize in backend development using Python and Django or FastAPI, building reliable systems with PostgreSQL and AWS. On the frontend, I craft seamless, responsive user interfaces with React and Tailwind CSS, ensuring a smooth experience across devices.</p>
                
                <p className="mb-4">My expertise spans across developing and integrating complex APIs, deploying applications to cloud environments, and optimizing workflows for high-performance solutions. I thrive in collaborative settings, always aiming to improve code quality and deliver impactful results.</p>

                <p className="mb-4">I'm constantly learning, staying up to date with the latest tech trends, and eager to tackle new challenges that push the boundaries of web development.</p>


                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl gont-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl gont-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">📖 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li className="font-thin">
                                <strong className="font-bold">Software Engineering</strong>
                            </li>
                                <p className="pl-8">
                                Universidad de Palermo - Buenos Aires (2024, present)
                                </p>

                            <li className="font-thin">
                                <strong className="font-bold">Information Systems Engineering</strong>
                            </li>
                                <p className="pl-8">
                                    Unviersidad Tecnologica Nacional - Cordoba (2022, 2024)
                                </p>

                            <li className="font-thin">
                                <strong className="font-bold">Relevant Coursework</strong>
                            </li>
                                <p className="pl-8">
                                    Data Structures, Web Development, Software Arquitechture
                                </p>
                        </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Full Stack Developer at Rooster Software Barn</h4>
                                <p className="font-thin mt-2">Developed full-stack web applications using Python (Django) for the backend and JavaScript for the frontend, ensuring efficient user, 
                                    payment, and data management.</p> 
                                <p className="font-thin mt-2"> Deployed on Heroku, with AWS storage and PostgreSQL for scalability. Integrated third-party APIs like 
                                    SendGrid and Stripe to enhance functionality and reliability.
                                </p>
                            </div>
                            <hr />
                            <div>
                                <h4 className="font-semibold">Independant software developer - Freelancer</h4>
                                <p className="font-thin mt-2">Developed and maintained multiple web applications from the ground up using Django, Node.js, and Java, creating robust systems and seamless user experiences. 
                                    Handled user authentication and data management with Django, PostgreSQL, and MySQL, ensuring security and reliability. Followed clean code principles 
                                    and best practices to build scalable, maintainable systems. Managed version control with Git and utilized AWS for scalable storage and deployment solutions</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </RevealOnScroll>
    </section>
}

export default About