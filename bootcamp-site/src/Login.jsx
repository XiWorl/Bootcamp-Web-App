import React from "react";
import './Login.css';
import { useState } from 'react'

import user_icon from './assets/person.png';
import email_icon from './assets/email.png'
import password_icon from './assets/password.png'


const LoginSignUp = () => {

    const [action, setAction] = useState("Sign Up");

    return (
        <div className="container">
            <div className="header"> 
                <div className="text"> {action} </div>
                <div className="underline"></div>
            </div>

            <div className="inputs">

                {action === "Login" ? <div> </div> : <div className="input">
                    <img src= {user_icon} alt="User Icon" />
                    <input type="name" placeholder = 'Name'/>
                </div>}

                <div className="input">
                    <img src= {email_icon} alt="Email Icon" />
                    <input type="email" placeholder="Email"/>
                </div>

                <div className="input">
                    <img src= {password_icon} alt="Password Icon"/>
                    <input type="password" placeholder="Password"/>
                </div>

                <div className="submit-container">
                    <div className= {action === "Login"? "submit" : "submit gray"} onClick = {()=>{setAction("Sign Up")}}> Sign Up </div>
                    <div className= {action === "Login"? "submit gray" : "submit"} onClick = {()=>{setAction("Login")}}> Login </div>
                </div>

            </div>

        </div>
    )
}

export default LoginSignUp