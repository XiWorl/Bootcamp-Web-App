import React from "react";
import logo from './assets/App-Dev-Logo.png'
import "./App.css"

function AdminLectures() {
    return (
        <div className='title'>
                <img id='logo' src= {logo} alt="App Dev Logo" />
                <h1> App Dev Bootcamp Lectures </h1>
        </div>
    )
}

export default AdminLectures;