import React from "react";
import logo from './assets/App-Dev-Logo.png'
import "./App.css"

function StudentAnnouncements() {
    return (
        <div className='title'>
                <img id='logo' src= {logo} alt="App Dev Logo" />
                <h1> App Dev Bootcamp Announcements </h1>
        </div>
    )
}

export default StudentAnnouncements;