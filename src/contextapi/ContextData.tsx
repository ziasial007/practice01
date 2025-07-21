import { createContext, useState } from "react"


export const myData = createContext(null)

export const ContextData = ({ children }: any) => {

    const [darkMode, setDarkMode] = useState(false)
    // console.log(darkMode);
    

    const globalData = { darkMode, setDarkMode }
    return (
        <>
            <myData.Provider value={globalData}>
                <div className={darkMode === true ? 'bg-black text-white' : 'bg-white text-black' }style={{height:'100vh'}}>
                    {children}
                </div>
            </myData.Provider>
        </>
    )
}   