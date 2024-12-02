import ReactDOM from "react-dom/client";
import React from "react";
import { useState } from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
//import {SidebarData} from "./SidebarData"
import "./App.css"
import {IconContext} from "react-icons"
import { Outlet, Link, NavLink } from "react-router";

const AdminLayout = () => {
    <>
      <Navbar/>
      <Outlet/>
    </>
};

export default AdminLayout;