import ReactDOM from "react-dom/client";
import React from "react";
import { useState } from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
//import {SidebarData} from "./SidebarData"
import "./App.css"
import {IconContext} from "react-icons"

import Navbar from "./AdminNavbar";
import { Outlet, Link, NavLink } from "react-router";

const StudentLayout = () => {

  return (
    <>
      <Navbar />
      <Outlet/>
       
    </>
  )
}

export default StudentLayout;