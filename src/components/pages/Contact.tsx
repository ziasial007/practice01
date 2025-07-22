import { useContext} from "react"
import { myData } from "../../contextapi/ContextData"


const Contact = () => {

    const context = useContext(myData);
if (!context) return null;
const { darkMode } = context;

    return (
        <>

            <div className={`main  w-full min-h-[100vh]   ${darkMode ? 'bg-black text-white'  :'bg-white text-black'}`}>
                <div className="blue h-[10vh] relative bg-blue-600"></div>
                
                <div className="second mx-auto m-6 min-h-[100vh] top-22 rounded shadow flex flex-col justify-center items-center md:shadow-black  md:w-[60%] w-[95%]">
                    <div className="md:text-[48px] text-[39px]  font-bold text-center ">
                        <h2>Get in Tuch</h2>
                        <p className="text-[13px] text-center text-gray-400 tracking-[0.5em]">afsfaf asdfa faff</p>
                    </div>
                    <div>
                        <form className="md:px-4  grid grid-cols-1 max-w-2xl py-3 gap-4 md:grid-cols-2">
                            <div>
                                <label htmlFor="FirstName" className="blocl text-sm font-medium text-gray-500">
                                    First Name
                                </label>
                                <input type="text" name="" id="" placeholder="zia sial" className="w-full border py-2 px-2 rounded outline-none" />
                            </div>
                            <div>
                                <label htmlFor="SecondName" className=" text-gray-500   ">
                                    Second Name
                                </label>
                                <input type="text" placeholder="Second Name" className="w-full outline-none py-2 px-2 rounded border" />
                            </div>
                            <div>
                                <label htmlFor="Email" className=" text-gray-500   ">
                                    Email
                                </label>
                                <input type="text" placeholder="Email" className="w-full outline-none py-2 px-2 rounded border" />
                            </div>
                            <div>
                                <label htmlFor="PhoneNumber" className=" text-gray-500">
                                    Phone Number
                                </label>
                                <input type="text" placeholder="Phone Number" className="w-full outline-none py-2 px-2 rounded border" />
                            </div>


                            <div className="md:col-span-2 ">
                                <label htmlFor="Message" className="block text-gray-500">
                                    Message
                                </label>
                                <textarea id="Message" rows={4}  placeholder="Write Message here" className="w-full border rounded py-2 px-2 h-16 md:h-28 outline-none">

                                </textarea>
                                <button className="bg-[#155DFC] text-white w-full py-2 mt-[20px] md:mt-[50px] rounded cursor-pointer">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Contact