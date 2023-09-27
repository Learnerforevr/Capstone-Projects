import React from "react";
import Navigationbar from "./Navigationbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Product from "./Product";
import Contact from "./Contact"
function Rough()
{
    return(
        <div>
            
            <BrowserRouter>
                <Navigationbar/>
                <div style={{height:'1px',width:'100%',backgroundColor:"blue"}}></div>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>  
                    <Route path="/Product" element={<Product/>}></Route>
                    <Route path="/Aboutus" element={<Aboutus/>}></Route>
                    <Route path="/Contact" element={<Contact/>}></Route>
                </Routes> 
            </BrowserRouter>
            
        </div>
    )
}
export default Rough