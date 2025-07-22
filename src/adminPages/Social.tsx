
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { myData } from "../contextapi/ContextData";

const Social = () => {

      const context = useContext(myData);
        if (!context) return null;
        const { darkMode } = context;
       
    return (
        <>

            <div className={`main`}>
                <div className={`icons flex justify-center items-center gap-[20px]  ${darkMode ? ' text-black' : ' text-white'}`}>
                    <div className=" py-2 px-2 rounded-2xl bg-white cursor-pointer">
                        <FcGoogle  />
                    </div>
                    <div className="bg-white py-2 px-2 rounded-2xl cursor-pointer">
                        <FaFacebookF className="text-blue-600 "/>
                    </div>
                    <div className="bg-white py-2 px-2 rounded-2xl cursor-pointer">
                        <BsTwitterX className="text-blue-600"/>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Social
