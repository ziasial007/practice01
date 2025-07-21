import { useContext } from "react"
import { myData } from "../../contextapi/ContextData"
import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

const DarkMode = () => {

    const { darkMode, setDarkMode  } = useContext(myData)
    return (
        <>


<div className="text-2xl cursor-pointer">
        {darkMode ? (
            <IoSunny onClick={() => setDarkMode(false)} />
            
        ):(
            <MdDarkMode onClick={() => setDarkMode(true)} />
        )
        
        }
</div>
        

           

        </>
    )
}
export default DarkMode