import { Link, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { useContext, useEffect, useRef, useState } from "react";
import DarkMode from "../theme/Darkmode";
import { IoIosMenu } from "react-icons/io";
import { myData } from "../../contextapi/ContextData";

const Navbar = () => {

   const navigate=useNavigate()
   const gotoSignIn =()=>{
    navigate('/signin')
   }
   const navigate1=useNavigate();
   const gotoJoinNow =()=>{
    navigate1('/joinnow')
   }
   
    // const {darkMode}=useContext(myData)
    const context = useContext(myData);
if (!context) return null; // or throw error
const { darkMode } = context;

    const [menu, setMenu] = useState(false)

    const [show, setShow] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef(null)
    useEffect(() => {
        const outsideClick = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setShow(true)
            }
        };
        document.addEventListener('click', outsideClick);
        return () => {
            document.removeEventListener('click', outsideClick)
        };
    }, [])

    return (
        <>

            <div className={`nav h-[60px] shadow z-20  fixed flex justify-between px-[10px] items-center w-full ${darkMode  ? 'bg-black text-white' : 'bg-white text-black'   }`}>
                <div className="leftNav flex gap-[40px] items-center">
                    <div className="logo md:text-[18px] text-[14px] ">
                        <a href="#"> <span className="flex flex-col ">
                            Zia Sial
                            <span className="text-[10px]">Developer</span>
                        </span></a>

                    </div>
                    <ul className=" px-[0px] md:px-[30px] gap-[20px] hidden md:flex relative">
                        <li><Link to='/'>Home</Link></li>
                        <li> <Link to='/about'>About</Link></li>
                        <li> <Link to='/contact'>Contact</Link></li>

                    </ul>
                    {/* ///////////////////////////////// */}
                    {
                        menu && (
                            <ul ref={menuRef} className=" px-[4px] h-[20vh] flex justify-center flex-col absolute left-0 rounded w-full top-[60px] bg-gray-500 text-black ">
                                <li className="hover:text-gray-600 p-1"><Link to='/'>Home</Link></li>
                                <li className="hover:text-gray-600 p-1"> <Link to='/about'>About</Link></li>
                                <li className="hover:text-gray-600 p-1"> <Link to='/contact'>Contact</Link></li>

                            </ul>
                        )

                    }
                    <div className="block md:hidden text-[25px] ps-[10px]">
                        <IoIosMenu className="cursor-pointer " onClick={() => setMenu(!menu)} />
                    </div>

                </div>
                {/* ////////////////////////////////////////////// */}
                <div className="rightNav flex gap-[35px] items-center relative">

                    <div className="md:flex hidden gap-[30px]  ">
                        <button className="border px-5 py-2.5 rounded cursor-pointer  hover:bg-[#3A4F39] transition-all hover:text-white border-black" onClick={gotoSignIn}>Sign in</button>
                        <button className="hover:bg-[#3A4F39] px-5 py-2.5 rounded cursor-pointer hover:text-white  border border-black transition-all"onClick={gotoJoinNow}>Join Now</button>
                    </div>

                    <div className="block md:hidden text-[25px] ps-[10px]">
                        <MdAccountCircle className="cursor-pointer " onClick={() => setShow(!show)} />
                    </div>
                    {show && (

                        <div ref={dropdownRef} className="md:flex w-[100px] top-[43px] absolute  right-6 bg-white flex justify-center flex-col border z-10">
                            <button className="  md:rounded  cursor-pointer transition-all text-black border-black" onClick={gotoSignIn}>Sign in</button>
                            <button className="bg-[#3A4F39] text-black w-full flex justify-center md:px-5 md:rounded rounded-none cursor-pointer hover:bg-transparent border-non md:border  border-black transition-all" onClick={gotoJoinNow}>Join Now</button>
                        </div>
                    )}

                    <DarkMode />


                </div>
            </div>
        </>
    )
}
export default Navbar