import RevealOnScroll from "../RevealOnScroll"

function Home() {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
                Hi, I'm Mauricio Molina
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Full Stack Engineer with expertise in Python, Django, and modern web technologies. I focus on delivering scalable applications and driving impactful solutions
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#contact" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                    hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Contact me</a>
                
                <a href="#projects" className="border border-blue-500/50 text-blue-100 py-3 px-6 rounded font-medium transition-all duration-200 
                    hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10">View Projects</a>
            </div>


            <div className="flex justify-center mt-10">
                <a href="https://github.com/mauriciomolinapicco" className="w-18 h-16">
                            <svg className="w-12 h-12 transition-all duration-200 hover:translate-y-0.5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 256 256">
                                        <g fill="#e9e9e9" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                            <g transform="scale(8.53333,8.53333)">
                                            <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                                            </g>
                                        </g>
                            </svg>
                </a>

                <a href="https://www.linkedin.com/in/mauricio-molina-picco/" className="w-18 h-16 transition-all duration-200 hover:translate-y-0.5">
                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 256 256">
                        <g fill="#e9e9e9" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                            <g transform="scale(5.12,5.12)">
                            <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path>
                            </g>
                        </g>
                        </svg>
                </a>
            </div>
        </div>
    </RevealOnScroll>
    </section>
}

export default Home