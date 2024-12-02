import React from "react";
import logo from './assets/App-Dev-Logo.png'
import "./App.css"

function AdminHome() {
    return (
        <div className='title'>
                <img id='logo' src= {logo} alt="App Dev Logo" />
                <h1> App Dev Bootcamp </h1>
        </div>
    )
}

export default AdminHome;