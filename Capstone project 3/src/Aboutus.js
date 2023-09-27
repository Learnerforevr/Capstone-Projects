import React from "react";



function Aboutus()
{
    return(
        <div style={{height:'1350px',width:'100%'}}>

            <div style={{height:'650px',width:'100%'}}>
                <h1 style={{marginLeft:"525px"}}>OUR SPECALISTS</h1>
                <p style={{marginLeft:"425px"}}>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing<br></br>
                    elit nullam nunc justo sagittis suscipit ultrices.</p>

                <div className="backgroundimage4" style={{ height:'300px',width:'300px',backgroundColor:"black",position:'absolute',marginLeft:'100px',marginTop:'50px'}}>
                    <div style={{width:'100%',height:'30px',backgroundColor:'lightgray',marginTop:'270px'}}>Dr.Mary Hudson</div>
                </div>
                <div className="backgroundimage5" style={{height:'300px',width:'300px',backgroundColor:"black",position:'absolute',marginLeft:'510px',marginTop:'50px'}}>
                    <div style={{width:'100%',height:'30px',backgroundColor:'lightgray',marginTop:'270px'}}>DR Tom Ford</div>
                </div>
                <div className="backgroundimage6" style={{height:'300px',width:'300px',backgroundColor:"black",position:'absolute',marginLeft:'900px',marginTop:'50px'}}>
                    <div style={{width:'100%',height:'30px',backgroundColor:'lightgray',marginTop:'270px'}}>
                        DR Linda Larson
                    </div>
                </div>
            </div>

            <div className="backgroundimage7" style={{height:'700px',width:'100%',backgroundColor:'darkslategray',position:'absolute'}}>
                <h1 style={{marginLeft:'550px'}}>Global presence</h1>
                <p style={{marginLeft:'450px'}}>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>
                    nullam nunc justo sagittis suscipit ultrices.</p>
            </div>

        </div>
    )
}

export default Aboutus;
