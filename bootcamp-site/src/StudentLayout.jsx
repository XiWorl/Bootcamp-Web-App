import React from "react";
import "./App.css"
import StudentNavbar from "./StudentNavbar";
import { Outlet } from "react-router";

const StudentLayout = () => {

  return (
    <>
      <StudentNavbar />
      <Outlet/>
       
    </>
  )
}

export default StudentLayout;