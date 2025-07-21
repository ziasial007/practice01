import { useContext } from "react"
import { myData } from "../../contextapi/ContextData"


const About = () => {
      const context = useContext(myData);
if (!context) return null;
const { darkMode } = context;
    return (
        <>

            <div className={`main w-full  p- min-h-[100vh] flex justify-center items-center  bg-[#1A1D23] }`}>
            <div className={`max-w-3xl mx-auto px-4 min-h-[80vh] text-center rounded  ${darkMode ? 'bg-[#1A1D23] text-white' : 'bg-[#989a9e] text-black'} `}>
                <h1 className="text-4xl font-bold m-4">About Us</h1>
                <p className="text-lg text-gray-700 ">
                    Welcome to our React-based project! This application is built using modern web technologies to provide users with a fast, interactive, and seamless experience.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Our goal is to deliver clean UI, responsive design, and optimized performance using tools like <span className="font-semibold">React</span>, <span className="font-semibold">Tailwind CSS</span>, and <span className="font-semibold">React Router</span>. Whether you're here to explore, learn, or build, we aim to provide the tools and structure that help you grow.
                </p>
                <p className="text-lg text-gray-700">
                    This project is designed and maintained by passionate developers who love building beautiful web experiences. Stay tuned for updates and new features!
                </p>
            </div>
            </div>

        </>
    )
}
export default About