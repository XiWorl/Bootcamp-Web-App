import React from "react";
import logo from './assets/App-Dev-Logo.png'
import "./App.css"
import CardAnnouncements from "./CardAnnouncements";

function StudentAnnouncements() {
    return (
        <>
            <div className='title'>
                <img id='logo' src= {logo} alt="App Dev Logo" />
                <h1> App Dev Bootcamp Announcements </h1>
            </div>

            <div className="Student-Announcements">
                <div className="announcement-card">
                <CardAnnouncements title="Title1" text="blah blah blah" date="December 25, 2024" />
                </div>
                <div className="announcement-card">
                <CardAnnouncements title="Title1" text="blah blah blah" date="December 25, 2024" />
                </div>
                <div className="announcement-card">
                <CardAnnouncements title="Title1" text="blah blah blah" date="December 25, 2024" />
                </div>
                <div className="announcement-card">
                <CardAnnouncements title="Title1" text="blah blah blah" date="December 25, 2024" />
                </div>
                <div className="announcement-card">
                <CardAnnouncements title="Title1" text="blah blah blah" date="December 25, 2024" />
                </div>
-             
-            </div>
        </>
    )
}

export default StudentAnnouncements;