import React from "react";
import "./stylecss.css";
function Product()
{
    return(
        <>
            <div style={{height:'700px'}}>
                
                <div><p style={{marginLeft:'475px',fontSize:'50px'}}>WE CARE ABOUT</p></div>

            <div>
                <div style={{height:'300px',width:'1199px',marginLeft:'50px',border:'1px solid white'}}>
                    <div  className="backgroundimage1" style={{float:'left',height:'300px',width:'399px',backgroundColor:'black'}}></div>
                    <div  className="backgroundimage2" style={{float:'left',height:'300px',width:'399px',backgroundColor:'black'}}></div>
                    <div  className="backgroundimage3" style={{float:'right',height:'300px',width:'401px',backgroundColor:'black'}}></div>
                </div>
                <div style={{height:'200px',width:'1199px',marginLeft:'50px'}}>
                    
                    <div style={{float:'left',height:'200px',width:'399px',backgroundColor:'white'}}>
                    <p style={{marginLeft:'15px'}} >CHILD CARE</p>
                    <p style={{marginLeft:'15px'}} >Sample text. Lorem ipsum dolor sit<br></br>
                        amet, consectetur adipiscing elit nullam<br></br>
                        nunc justo sagittis suscipit ultrices.</p>
                    <a style={{marginLeft:'15px'}} href="">READ MORE</a>
                    </div>
                    
                    <div style={{float:'left',height:'200px',width:'399px',backgroundColor:'white'}}>
                    <p style={{marginLeft:'15px'}}>DENTAL CARE</p>
                    <p style={{marginLeft:'15px'}}>Sample text. Lorem ipsum dolor sit<br></br>
                        amet, consectetur adipiscing elit nullam<br></br>
                        nunc justo sagittis suscipit ultrices.</p>
                    <a style={{marginLeft:'15px'}} href="">READ MORE</a>
                    </div>
                    
                    <div style={{float:'right',height:'200px',width:'401px',backgroundColor:'white'}}>
                    <p style={{marginLeft:'15px'}}>BIRTH CARE</p>
                    <p style={{marginLeft:'15px'}}>Sample text. Lorem ipsum dolor sit<br></br>
                        amet, consectetur adipiscing elit nullam<br></br>
                        nunc justo sagittis suscipit ultrices.</p>
                    <a style={{marginLeft:'15px'}} href="">READ MORE</a>
                    </div>
                
                </div>
            </div>

            </div>
            
        
        </>
    )
}

export default Product;
