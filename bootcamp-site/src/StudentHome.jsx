import React from "react";
import logo from './assets/App-Dev-Logo.png';
import rectangle from './assets/Rectangle 1.png';
import "./StudentHome.css";
import { Link } from "react-router-dom"; 

function StudentHome() {
    return (
        <>
            <div className='title'>
                    <img id='logo' src={logo} alt="App Dev Logo" />
                    <h1>App Dev Bootcamp</h1>
            </div>

            <div className="student-home">
                <div className="rectangle-container">
                    <div className="rectangle-grid">
                        <div className="rectangle-item">
                            <Link to="/announcements">
                                <img className="rectangle" src={rectangle} alt="Rectangle" />
                                
                                <div className="rectangle-text">Announcements</div>
                            </Link>
                        </div>
                        <div className="rectangle-item">
                            <Link to="/lectures">
                                <img className="rectangle" src={rectangle} alt="Rectangle" />
                                <div className="rectangle-text">Lectures</div>
                            </Link>
                        </div>
                    </div>
                    <div className="rectangle-grid">
                        <div className="rectangle-item">
                            <Link to="/homeworks">
                                <img className="rectangle" src={rectangle} alt="Rectangle" />
                                <div className="rectangle-text">Homework</div>
                            </Link>
                        </div>
                        <div className="rectangle-item">
                            <Link to="/mentorgroups">
                                <img className="rectangle" src={rectangle} alt="Rectangle" />
                                <div className="rectangle-text">Mentor Groups</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentHome;
