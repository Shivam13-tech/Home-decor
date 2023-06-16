import React, {useState} from "react";

function Auth(){
    const [login, setLogin] = useState(false)
    return (
        <> 
           <div className="auth-ui">
                <div>
                    <button className="form-action-button" onClick={() => setLogin(true)}>Login</button>
                    <button className="form-action-button" onClick={() => setLogin(false)}>Sign up</button>
                </div>
                { !login ? (
                <div className="form-design">
                    <label className="form-label" for="signup-email">Enter email:</label>
                    <input className="form-input" type="email"/>
                    <label className="form-label" for="signup-pass">Enter password:</label>
                    <input className="form-input" type="password"/>
                    <label className="form-label" for="signup-passconf">Confirm password:</label>
                    <input className="form-input" type="password"/>
                    <label for="type" className="form-label">Choose your account type</label>
                    <select name="type" className="form-dropdown">
                        <option value="Select">Select</option>
                        <option value="Buyer">Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>
                    <button className="form-button">Sign up</button>
                </div>
                ) : (
                <div className="form-design"> 
                    <lable className="form-label" for="login-email">Enter email:</lable>
                    <input className="form-input" type="email"/>
                    <label className="form-label" for="login-pass">Enter password:</label>
                    <input className="form-input" type="password"/>
                    <button className="form-button">Login</button>
                </div>
                )}
           </div>
        </>
    )
}

export default Auth