import React from "react";
import { useState, useEffect } from 'react';
import logo from './assets/App-Dev-Logo.png'
import "./App.css"
import MyCard from "./MyCard";
import HomeworkImage1 from "./assets/ImageHomework1.png"
import HomeworkImage2 from "./assets/ImageHomework2.png"
import HomeworkImage3 from "./assets/ImageHomework3.png"
import HomeworkImage4 from "./assets/ImageHomework4.png"
import HomeworkImage5 from "./assets/ImageHomework5.png"

// function StudentHomeworks() {
//     return (
//         <>
//             <div className='title'>
//                 <img id='logo' src= {logo} alt="App Dev Logo" />
//                 <h1> App Dev Bootcamp Homeworks </h1>
//             </div>
//             <div className="Student-Homework">
//                 <MyCard className="card" width="23rem" image={HomeworkImage1} title="Homework 1" instructions="do your homework" url="https://www.google.com/" typeOfButton="Submit" />
//                 <MyCard className="card" width="23rem" image={HomeworkImage2} title="Homework 2" instructions="do your homework" url="https://www.google.com/" typeOfButton="Submit"/>
//                 <MyCard className="card" width="23rem" image={HomeworkImage3} title="Homework 3" instructions="do your homework" url="https://www.google.com/" typeOfButton="Submit"/>
//                 <MyCard className="card" width="23rem" image={HomeworkImage4} title="Homework 4" instructions="do your homework" url="https://www.google.com/" typeOfButton="Submit"/>
//                 <MyCard className="card" width="23rem" image={HomeworkImage5} title="Homework 4" instructions="do your homework" url="https://www.google.com/" typeOfButton="Submit"/>
//             </div>
//         </>
//     )
// }

// export default StudentHomeworks;


export default function Fetch () {
    const [todos, setTodos] = useState([])
    const fetchTodos = async () => {
      const response = await fetch("http://127.0.0.1:8000/homeworks")
      const todos = await response.json()
      setTodos(todos.data)
    }
    useEffect(() => {
      fetchTodos()
    }, [])
 return (
    <>
     <div className='title'>
        <img id='logo' src= {logo} alt="App Dev Logo" />
        <h1> App Dev Bootcamp Homeworks </h1>
    </div>
    {todos.map((todo) => (<div className="Student-Homework">
        <MyCard className="card" width="23rem" image={todo.img_link} title={todo.class} instructions={"Complete the following assignment"} url={todo.link} typeOfButton="Submit"/>
    </div>))
    }
    </>
 );
};