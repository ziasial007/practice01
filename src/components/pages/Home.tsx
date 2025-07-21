import { useContext } from "react"
import { myData } from "../../contextapi/ContextData"
import About from "./Contact"
import Contact from "./About"
import { FaReact } from "react-icons/fa6";




export const Home = () => {
    const context = useContext(myData);
    if (!context) return null;
    const { darkMode } = context;


    return (
        <>

            <div className={`w-full h-[100vh]  ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <div className="main flex justify-center items-center flex-col h-[100vh] mx-[20px]  ">
                    <div className="icon text-[100px]">
                        <FaReact />
                    </div>
                    <h1 className="text-[48px] font-semibold">React</h1>
                    <h2 className="text-4xl text-center">The library for web and native user interfaces</h2>
                    <div className="flex-col flex w-full gap-10 mt-16 md:flex-row justify-center">
                        <button className="bg-[#2fa5c9] px-8 py-4 hover:bg-[#2fa5c9d2] text-gray-800 rounded-4xl cursor-pointer">Learn React</button>
                        <button className="border px-8 py-4 rounded-4xl cursor-pointer hover:bg-[#f0efef]">API Refernce</button>
                    </div>

                </div>
            </div>


            <div className="flex justify-center flex-col items-center">
                <About />
                <Contact />
            </div>
        </>
    )
}