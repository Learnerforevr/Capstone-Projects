import React from "react";
import { Link } from "react-router-dom";
function Navigationbar()
{
    return(
        <div style={{backgroundColor:"transparent",height:"50px",width:"100%"}}>

                <div style={{position:"absolute",backgroundColor:"white",borderRadius:"30px",height:"25px",width:"60px",marginLeft:"900px",marginTop:"12px",float:"left"}}><Link to="/"><center>Home</center></Link></div>
                    
                <div style={{position:"absolute",backgroundColor:"white",borderRadius:"30px",height:"25px",width:"120px",marginLeft:"975px",marginTop:"12px",float:"left"}}><Link to="/product"><center>We care about</center></Link></div>
                
                <div style={{position:"absolute",backgroundColor:"white",borderRadius:"30px",height:"25px",width:"70px",marginLeft:"1110px",marginTop:"12px",float:"left"}}><Link to="/aboutus"><center>About us</center></Link></div>
                
                <div style={{position:"absolute",backgroundColor:"white",borderRadius:"30px",height:"25px",width:"65px",marginLeft:"1200px",marginTop:"12px",float:"left"}}><Link to="/contact"><center>Contact</center></Link></div>
        </div>
    )
}
export default Navigationbar