import React from "react";
import logo from './assets/App-Dev-Logo.png';
import "./App.css";
import "./StudentMentorGroups.css";

function StudentMentorGroup() {
    const mentorGroups = [
        {
            id: 1,
            name: "Praying for Internships 🙏 ",
            description: "Specializing Software Engineering and Quant Development",
            mentor: "Spencer and Pheobe",
            members: "Lakshmee Harivanam, Joseph Acquah, Milana Dagne, Jayant Kammula, & Uriel Vit-Ojiegbe"
        },
        {
            id: 2,
            name: "Researchers",
            description: "Specializing in AI Research",
            mentor: "Phillip & Aaquib",
            members: "Pranav Krishnamurthy, Misha Khan, Cedric Pierre-Louis, Harini Thirukonda, & Emily Lawrence"
        },
        {
            id: 3,
            name: "Akshaj & Aidan",
            description: "Exploring machine learning, AI models, and automation.",
            mentor: "Emily Davis",
            members: "Andy Chen, Kira Le, Lily Ureta, Kyle Yin, & Rachel Li"
        },
        {
            id: 4,
            name: "Quant",
            description: "Specializing in Quant Development",
            mentor: "Aditya & Sam",
            members: "Deep Mistry, Samara Rahman, Yashu Bommareddy, Mazin Nadaf, & Brandon Isbell"
        },
        {
            id: 5,
            name: "Team 4 People",
            description: "Specializing in Software Engineering",
            mentor: "Brian & Yanit",
            members: "Sawyer Bloom, Lauren Lipinski, Ryan Selser, Natali Oleinik, & Jacob Demory"
        },
        {
            id: 6,
            name: "Kimbots",
            description: "Specializing in Software Engineering",
            mentor: "Maura & Michelle",
            members: "Autumn Anson, Rukmini Gaddam, Muatasim Miller, Nate Zhang, & Ryan Li"
        },
        {
            id: 7,
            name: "BHANK",
            description: "Specializing in Software Engineering",
            mentor: "Jayden & Ravi",
            members: "Kaleb Ward, Andrew Chen, Bhavya Tanugula, Nimisokan Ojikutu, & Harleen Green"
        },
        {
            id: 8,
            name: "Praying for Internships 🙏 ",
            description: "Specializing in Software Engineering and AI Research",
            mentor: "Nitish & Gavin",
            members: "Aditi Sethi, Nithya Gopalakrishnan, Aryan Jain, Dhruv Satanur, & Rushil Juneja"
        },
        {
            id: 9,
            name: "Samai's Legacy",
            description: "Specializing in Software Engineering, Product Managements, and Consulting",
            mentor: "Samai & Matt",
            members: "Vir Trivedi, Riya Lakhani, Madeline Moldrem, Samantha Tyles, & James Miller"
        },
    ];

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
