import React from "react";

function Auth(){
    return (
        <>
            <div className="auth-ui">
                    <h1 style={{textAlign: "center", marginTop: "2vh", marginBottom: "2vh"}}>Signup/Login</h1>
                    <label id="email" for="email" style={{marginTop: "1vh", marginBottom: "1vh"}}>Email:</label>
                    <input type="text" name="email" placeholder="Enter your email" style={{width: "10vw", height: "3vh"}}/>
                    <label id="pass" for="password" style={{marginTop: "1vh", marginBottom: "1vh"}}>Password:</label>
                    <input type="password" name="password" placeholder="Enter your password" style={{width: "10vw", height: "3vh"}}/>
                    <label for="Buyer" style={{marginTop: "1vh", marginBottom: "1vh"}}> I am a: Buyer</label>
                    <input type="checkbox" name="Buyer" value="Buyer" />
                    <label for="Seller" style={{marginTop: "1vh", marginBottom: "1vh"}}> I am a: Seller</label>
                    <input type="checkbox" name="Seller" value="Seller" />
                    <button className="Single-product-button">Submit</button>
            </div>
        </>
    )
}

export default Auth