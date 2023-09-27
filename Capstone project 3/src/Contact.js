import React from "react";

function Contact()
{
    return(
        <div style={{height:'550px',width:'100%',backgroundColor:"gray",position:'absolute'}}>

                <h1 style={{marginLeft:'550px',marginTop:'30px'}}>GET IN TOUCH</h1>
                <p style={{marginLeft:'425px'}}>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit<br></br>
                nullam nunc justo sagittis suscipit ultrices.</p>
                
                <input style={{position:'absolute',marginLeft:'350px',marginTop:'15px',height:'30px',width:'650px',backgroundColor:"lightgray",border:"0px solid lightgray"}} type="text" placeholder="Name"></input><br></br>
                <input style={{position:'absolute',marginLeft:'350px',marginTop:'40px',height:'30px',width:'650px',backgroundColor:"lightgray",border:"0px solid lightgray"}} type="text" placeholder="Email"></input><br></br>

                <form style={{position:'absolute',marginLeft:'350px',marginTop:'70px'}}>
                    
                    <textarea placeholder="Enter your message" cols="30" rows="10" style={{backgroundColor:"lightgray",border:"0px solid lightgray",width:'650px'}}></textarea>

                </form><br></br>
                <button style={{marginTop:'225px',marginLeft:'620px',height:'30px',width:'80px'}}>Submit</button>
                <div style={{position:"absolute",marginTop:'40px',height:'100px',width:'100%',backgroundColor:'black'}}>
            <h5 style={{color:'white',marginLeft:'490px',position:"absolute",marginTop:"30px"}}><a href="">Websites Templates</a> created with <a href="">Website Builder Software.</a> </h5>
            </div>
        </div>
        
        
    )
}

export default Contact;