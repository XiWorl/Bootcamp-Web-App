import React from "react";
import logo from './assets/App-Dev-Logo.png';
import rectangle from './assets/Rectangle 1.png';
import "./StudentHomework.css";

function StudentHome() {
    return (
        <div className="student-home">
            <div className='title'>
                <img id='logo' src={logo} alt="App Dev Logo" />
                <h1>App Dev Bootcamp</h1>
            </div>
            <div className="rectangle-container">
                <div className="rectangle-grid">
                    <div className="rectangle-item">
                        <img className="rectangle" src={rectangle} alt="Rectangle" />
                        <div className="rectangle-text">Announcements</div>
                    </div>
                    <div className="rectangle-item">
                        <img className="rectangle" src={rectangle} alt="Rectangle" />
                        <div className="rectangle-text">Lectures</div>
                    </div>
                </div>
                <div className="rectangle-grid">
                    <div className="rectangle-item">
                        <img className="rectangle" src={rectangle} alt="Rectangle" />
                        <div className="rectangle-text">Homework</div>
                    </div>
                    <div className="rectangle-item">
                        <img className="rectangle" src={rectangle} alt="Rectangle" />
                        <div className="rectangle-text">Mentor Groups</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentHome;
