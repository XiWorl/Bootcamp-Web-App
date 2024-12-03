import React from "react";
import logo from './assets/App-Dev-Logo.png'
import "./App.css"
import MyCard from "./MyCard";

function StudentHomeworks() {
    return (
        <>
            <div className='title'>
                <img id='logo' src= {logo} alt="App Dev Logo" />
                <h1> App Dev Bootcamp Homeworks </h1>
            </div>
            <div className="Student-Homework">
                <MyCard className="card" image={logo} title="Homework 1" instructions="do your homework" url="https://www.google.com/" />
                <MyCard className="card" image={logo} title="Homework 1" instructions="do your homework" url="https://www.google.com/" />
                <MyCard className="card" image={logo} title="Homework 1" instructions="do your homework" url="https://www.google.com/" />
                <MyCard className="card" image={logo} title="Homework 1" instructions="do your homework" url="https://www.google.com/" />
                <MyCard className="card" image={logo} title="Homework 1" instructions="do your homework" url="https://www.google.com/" />
                <MyCard className="card" image={logo} title="Homework 1" instructions="do your homework" url="https://www.google.com/" />
                <MyCard className="card" image={logo} title="Homework 1" instructions="do your homework" url="https://www.google.com/" />
                <MyCard className="card" image={logo} title="Homework 1" instructions="do your homework" url="https://www.google.com/" />
            </div>
        </>
    )
}

export default StudentHomeworks;