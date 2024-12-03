import React from "react";
import logo from './assets/App-Dev-Logo.png'
import "./App.css"
import MyCard from "./MyCard";
import HomeworkImage1 from "./assets/ImageHomework1.png"
import HomeworkImage2 from "./assets/ImageHomework2.png"
import HomeworkImage3 from "./assets/ImageHomework3.png"
import HomeworkImage4 from "./assets/ImageHomework4.png"
import HomeworkImage5 from "./assets/ImageHomework5.png"

function StudentHomeworks() {
    return (
        <>
            <div className='title'>
                <img id='logo' src= {logo} alt="App Dev Logo" />
                <h1> App Dev Bootcamp Homeworks </h1>
            </div>
            <div className="Student-Homework">
                <MyCard className="card" width="23rem" image={HomeworkImage1} title="Homework 1" instructions="do your homework" url="https://www.google.com/" typeOfButton="Submit" />
                <MyCard className="card" width="23rem" image={HomeworkImage2} title="Homework 2" instructions="do your homework" url="https://www.google.com/" typeOfButton="Submit"/>
                <MyCard className="card" width="23rem" image={HomeworkImage3} title="Homework 3" instructions="do your homework" url="https://www.google.com/" typeOfButton="Submit"/>
                <MyCard className="card" width="23rem" image={HomeworkImage4} title="Homework 4" instructions="do your homework" url="https://www.google.com/" typeOfButton="Submit"/>
                <MyCard className="card" width="23rem" image={HomeworkImage5} title="Homework 4" instructions="do your homework" url="https://www.google.com/" typeOfButton="Submit"/>
            </div>
        </>
    )
}

export default StudentHomeworks;