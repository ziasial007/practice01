import { useContext } from "react";
import { FaGooglePlus } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandOnlyfans } from "react-icons/tb";
import { myData } from "../../contextapi/ContextData";
const Data = () => {

       const context = useContext(myData);
        if (!context) return null;
        const { darkMode } = context;
       
    return (
        <div className={`main w-full min-h-[100vh]  ${darkMode ? 'bg-[#312929] text-white' : 'bg-white text-black' }  `}>
            <form className="bg-whit w-full mx-auto h-[100%] p-4 ">
                <div className="flex flex-wrap  gap-4 p-5 md:w-[55%] sm:w-full  min-h-[100vh] shadow-2xl shadow-blue-400 mx-auto">
                    <div className="flex-wrap md:flex gap-5  w-full ">
                        <div className="">
                            <label htmlFor="Name" className="block">first Name</label>
                            <input type="text" placeholder="Name" className="border rounded outline-none w-full p-2"
                            />
                        </div>

                        <div className="">
                            <label htmlFor="SecondName" className="block">Last Name</label>
                            <input type="text" placeholder="Second Name" className="border rounded outline-none w-full p-2" />
                        </div>
                    </div>
                    <div className="w-[100%] ">

                        <label htmlFor="third" className="block ">Email Address</label>
                        <input
                            type="text" placeholder="Email Address" className="border rounded outline-none w-full p-2" />

                    </div>
                    <div className="w-[100%]">

                        <label htmlFor="third" className="block ">Password</label>
                        <input
                            type="Password" placeholder="Write Password" className="border rounded outline-none w-full p-2" />

                    </div>
                    <div className="w-[100%]">

                        <label htmlFor="third" className="block ">Confarm Password</label>
                        <input
                            type="Password" placeholder="Confarm Password" className="border rounded outline-none w-full p-2" />

                    </div>
                    <button className="w-full bg-gray-500 rounded px-2 py-2 flex justify-center  items-center gap-2 cursor-pointer"> Sign Up
                        <FaLongArrowAltRight />
                    </button>
                    <div className="h-[1px] bg-gray-400 w-full"></div>
                    <button className="w-full bg-gray-500 rounded px-2 py-2 flex justify-cente  items-center gap-2 cursor-pointer">  <FaGithub />Sign Up                    
                    </button>
                     <button className="w-full bg-gray-500 rounded px-2 py-2 flex justify-cente  items-center gap-2 cursor-pointer">  <FaGooglePlus />Sign Up                    
                    </button>
                    <button className="w-full bg-gray-500 rounded px-2 py-2 flex justify-cente  items-center gap-2 cursor-pointer">  <TbBrandOnlyfans />Sign Up                    
                    </button>
                </div>

            </form>
        </div>
    );
};
export default Data;




