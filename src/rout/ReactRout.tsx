import { Route, Routes } from "react-router-dom"

import { Home } from "../components/pages/Home"
import Navbar from "../components/navbar/Navbar"
import About from "../components/pages/About"
import Contact from "../components/pages/Contact"




const ReactRout = () => {
    
    return (
        <>
            <Navbar />
            <div className="pt-15">
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            </div>

        </>
    )
}
export default ReactRout