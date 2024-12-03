import React from "react";
import logo from './assets/App-Dev-Logo.png'
import "./App.css"
import MyCard from "./MyCard";
import ImageLecture1 from "./assets/ImageLecture1.png"
import ImageLecture2 from "./assets/ImageLecture2.png"
import ImageLecture3 from "./assets/ImageLecture3.png"
import ImageLecture4 from "./assets/ImageLecture4.png"
import ImageLecture5 from "./assets/ImageLecture5.png"
import ImageLecture6 from "./assets/ImageLecture6.png"
import ImageLecture7 from "./assets/ImageLecture7.png"
import ImageLecture8 from "./assets/ImageLecture8.png"
import CardWithoutButton from "./CardWithoutButton";

function StudentLectures() {
    return (
        <>
            <div className='title'>
                <img id='logo' src= {logo} alt="App Dev Logo" />
                <h1> App Dev Bootcamp Lectures </h1>
            </div>

            <div className="Student-Lectures" >
                <MyCard className="card" image={ImageLecture1} title="Lecture 1" instructions="topics of lecture" url="https://www.google.com/" typeOfButton="Go to Slides"/>
                <MyCard className="card" image={ImageLecture2} title="Lecture 2" instructions="topics of lecture" url="https://www.google.com/" typeOfButton="Go to Slides"/>
                <MyCard className="card" image={ImageLecture3} title="Lecture 3" instructions="topics of lecture" url="https://www.google.com/" typeOfButton="Go to Slides"/>
                <MyCard className="card" image={ImageLecture4} title="Lecture 4" instructions="topics of lecture" url="https://www.google.com/" typeOfButton="Go to Slides"/>
                <MyCard className="card" image={ImageLecture5} title="Lecture 5" instructions="topics of lecture" url="https://www.google.com/" typeOfButton="Go to Slides"/>
                <MyCard className="card" image={ImageLecture6} title="Lecture 6" instructions="topics of lecture" url="https://www.google.com/" typeOfButton="Go to Slides"/>
                <MyCard className="card" image={ImageLecture7} title="Lecture 7" instructions="topics of lecture" url="https://www.google.com/" typeOfButton="Go to Slides"/>
                <MyCard className="card" image={ImageLecture8} title="Lecture 8" instructions="topics of lecture" url="https://www.google.com/" typeOfButton="Go to Slides"/>
            </div>
        </>
    )
}

export default StudentLectures;