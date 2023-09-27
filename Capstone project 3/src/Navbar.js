import React from "react"
import { Link } from "react-router-dom"
function Navbar()
{
    return(
        <div style={{backgroundColor:"skyblue",height:"50px",width:"100%"}}>
                <div style={{backgroundColor:"white",borderRadius:"30px",height:"25px",width:"60px",marginLeft:"700px",marginTop:"12px",float:"left"}}><Link to="/"><center>Home</center></Link></div>
                    
                <div style={{backgroundColor:"white",borderRadius:"30px",height:"25px",width:"65px",marginLeft:"100px",marginTop:"12px",float:"left"}}><Link to="/product"><center>Product</center></Link></div>
                
                <div style={{backgroundColor:"white",borderRadius:"30px",height:"25px",width:"70px",marginLeft:"100px",marginTop:"12px",float:"left"}}><Link to="/aboutus"><center>About us</center></Link></div>
                
                <div style={{backgroundColor:"white",borderRadius:"30px",height:"25px",width:"65px",marginLeft:"100px",marginTop:"12px",float:"left"}}><Link to="/contact"><center>Contact</center></Link></div>
        </div>

    )
}

export default Navbar