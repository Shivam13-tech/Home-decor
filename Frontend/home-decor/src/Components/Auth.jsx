import React, {useState} from "react";
import {authenticate} from '../Actions'
import {useDispatch} from 'react-redux'
import axios from 'axios';

function Auth(){
    const dispatch = useDispatch()
    const signupURL = 'http://127.0.0.1:8000/api/auth/signup'
    const loginURL = 'http://127.0.0.1:8000/api/auth/login'

    const [login, setLogin] = useState(false)

    const [signupdata, Setsignupdata] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        type: 'Select'
    })

    const [logindata, Setlogindata] = useState({
        email: '',
        password: ''
    })

    const [authError, setAuthError] = useState('')

    function handlesignupinput(event){
        Setsignupdata({
            ...signupdata,
            [event.target.name]: event.target.value
        })
    }

    function handlelogininput(event){
        Setlogindata({
            ...logindata,
            [event.target.name]: event.target.value
        })
    }

    function signupformsubmit(event){
        event.preventDefault();
        axios.post(signupURL,signupdata)
        .then(function(response){
            console.log(response)
            dispatch(authenticate(response.data.Token))
            Setsignupdata({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                type: 'Select'
            })
            setAuthError('')
        }).catch(error => {
            setAuthError(error.response.data.data.message)
            console.log(error.response.data.data.message)
        })
        
    }

    function loginformsubmit(event){
        event.preventDefault();
        axios.post(loginURL,logindata)
        .then(function(response){
            console.log(response)
            dispatch(authenticate(response.data.Token))
            setAuthError('')
        }).catch(error => {
            setAuthError(error.response.data.Message)
            console.log(error)
        })
        Setlogindata({
            email: '',
            password: ''
        })
    }


    return (
        <> 
           <div className="auth-ui">
                <div>
                    <button className="form-action-button" onClick={() => setLogin(true)}>Login</button>
                    <button className="form-action-button" onClick={() => setLogin(false)}>Sign up</button>
                </div>
                <p style={{color: "red"}}>{authError}</p>
                { !login ? (
                <div className="form-design">
                    <label className="form-label" htmlFor="signup-name">Enter name:</label>
                    <input className="form-input" type="text" name="name" value={signupdata.name} onChange={handlesignupinput}/>
                    <label className="form-label" htmlFor="signup-email">Enter email:</label>
                    <input className="form-input" type="email" name="email" value={signupdata.email} onChange={handlesignupinput}/>
                    <label className="form-label" htmlFor="signup-pass">Enter password:</label>
                    <input className="form-input" type="password" name="password" value={signupdata.password} onChange={handlesignupinput}/>
                    <label className="form-label" htmlFor="signup-passconf">Confirm password:</label>
                    <input className="form-input" type="password" name="confirmPassword" value={signupdata.confirmPassword} onChange={handlesignupinput}/>
                    <label htmlFor="type" className="form-label">Choose your account type</label>
                    <select name="type" className="form-dropdown" value={signupdata.type} onChange={handlesignupinput}>
                        <option value="Select">Select</option>
                        <option value="Buyer">Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>
                    <button className="form-button" onClick={signupformsubmit}>Sign up</button>
                </div>
                ) : (
                <div className="form-design"> 
                    <lable className="form-label" htmlFor="login-email">Enter email:</lable>
                    <input className="form-input" type="email" name="email" value={logindata.email} onChange={handlelogininput}/>
                    <label className="form-label" htmlFor="login-pass">Enter password:</label>
                    <input className="form-input" type="password" name="password" value={logindata.password} onChange={handlelogininput}/>
                    <button className="form-button" onClick={loginformsubmit}>Login</button>
                </div>
                )}
           </div>
        </>
    )
}

export default Auth