import React from "react";
import logo from './assets/App-Dev-Logo.png';
import { useState, useEffect } from 'react';

import "./App.css";
import "./StudentMentorGroups.css";

function StudentMentorGroup() {
    // const mentorGroups = [
    //     {
    //         id: 1,
    //         name: "Ayanokoji",
    //         description: "Specializing in React, CSS, and modern web design.",
    //         mentor: "John Doe",
    //         members: 10,
    //     },
    //     {
    //         id: 2,
    //         name: "Sakayanagi",
    //         description: "Focus on Node.js, Express, and database management.",
    //         mentor: "Jane Smith",
    //         members: 8,
    //     },
    //     {
    //         id: 3,
    //         name: "Horikita",
    //         description: "Exploring machine learning, AI models, and automation.",
    //         mentor: "Emily Davis",
    //         members: 12,
    //     },
    //     {
    //         id: 4,
    //         name: "Ryuen",
    //         description: "Creating mobile apps using React Native and Flutter.",
    //         mentor: "Michael Brown",
    //         members: 9,
    //     },
    // ];

    const [mentorGroups, setGroups] = useState([])
    const fetchTodos = async () => {
      const response = await fetch("http://127.0.0.1:8000/groups")
      const mentorGroups = await response.json()
      setGroups(mentorGroups.data)
    }
    useEffect(() => {
      fetchTodos()
    }, [])
    const descriptionColors = ["#FFB6C1", "#87CEEB", "#90EE90", "#FFA500"];

    return (
        <div className="student-mentor-group">
            <div className="title">
                <img id="logo" src={logo} alt="App Dev Logo" />
                <h1>App Dev Bootcamp Mentor Groups</h1>
            </div>
            <div className="mentor-groups-container">
                {mentorGroups.map((group, index) => (
                    <div key={group.id} className="mentor-group-card">
                        <h2 className="group-name">{group.name}</h2>
                        <div
                            className="group-details"
                            style={{
                                backgroundColor: descriptionColors[index % descriptionColors.length],
                            }}
                        >
                            <p>{group.description}</p>
                            <p><strong>Mentor:</strong> {group.mentor}</p>
                            <p><strong>Members:</strong> {group.members}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudentMentorGroup;
