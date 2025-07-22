
import { useContext } from "react";
import { RiAccountBox2Line } from "react-icons/ri";
import { myData } from "../contextapi/ContextData";


const SignIn = () => {
    const context = useContext(myData);
    if (!context) return null;
    const { darkMode } = context;
   
    

    return (
        <>
            <div className={`main   h-[100vh] flex justify-center items-center pt-[0px] w-full  ${darkMode ? 'bg-black text-white' : 'bg-linear-to-r from-cyan-500 to-blue-500'}`}>
                <div className={`login md:w-[50%] w-[90%] h-[95vh] mx-auto rounded shadow-2xl shadow-white ${darkMode ? 'bg-black text-white' : ' bg-white text-black'}`}>
                    <div className="content text-center pt-6">
                        <h2 className="text-[49px]">Login</h2>
                    </div>
                    <form className="w-[80%] md:w-[300px] mx-auto flex flex-col justify-center h-[40vh] md:h-[50vh]">
                        <label htmlFor="username" className="block text-gray-400 ">
                            username
                        </label>
                        <div className="flex items-center border-b border-gray-200 py-1 text-gray-600 ">
                            <RiAccountBox2Line className="text-[20px] text-gray-500" />
                            <input type="text" name="" id="username" placeholder="Type your username" className="block outline-non text-gray-600 p-2 w-[60%] outline-none" />
                        </div>


                        <div className="pt-10">
                            <label htmlFor="Password" className="block text-gray-400 ">
                                Password
                            </label>
                            <div className="flex items-center border-b border-gray-200 py-1 text-gray-600 ">
                                <RiAccountBox2Line className="text-[20px] text-gray-500" />
                                <input type="password" name="" id="password" placeholder="Type your username" className="block outline-non text-gray-600 p-2 w-[60%] outline-none " />
                            </div>
                        </div>
                        <span className="text-right text-gray-600 font-[300] text-[14px] mt-2 cursor-pointer hover:text-blue-500">forgit Password?</span>
                    </form>
                    <button className="font-semibold bg-amber-400 md:w-[400px] min-w-[250px] flex py-2 rounded-2xl mx-auto justify-center mb-10">LOGIN</button>

                </div>
            </div>



        </>
    )
}
export default SignIn