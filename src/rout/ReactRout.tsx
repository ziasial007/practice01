import { Route, Routes } from "react-router-dom"

import { Home } from "../components/pages/Home"
import Navbar from "../components/navbar/Navbar"
import About from "../components/pages/About"
import Contact from "../components/pages/Contact"
import SignIn from "../adminPages/SignIn"
import JoinNow from "../adminPages/JoinNow"




const ReactRout = () => {
    
    return (
        <>
            <Navbar />
            <div className="pt-15">
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/joinnow" element={<JoinNow />} />
            </Routes>
            </div>

        </>
    )
}
export default ReactRout