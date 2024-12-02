import React from "react";
import { useState } from "react";
import * as FaIcon from "react-icons/fa"
import * as AiIcon from "react-icons/ai"
import * as IoIcon from "react-icons/io"

export const AdminSidebarData = [
    {
        title: "Home",
        path: "/admin",
        icons: <AiIcon.AiFillHome />,
        cName: "nav-text",
    }, 
    {
        title: "Announcements",
        path: "/admin/announcements",
        icons: <AiIcon.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Lectures",
        path: "/admin/lectures",
        icons: <AiIcon.AiFillHome />,
        cName: "nav-text",
    }, 
    {
        title: "Homework",
        path: "/admin/homeworks",
        icons: <AiIcon.AiFillHome />,
        cName: "nav-text",
    }, 
    {
        title: "Mentor Groups",
        path: "/admin/mentorgroups",
        icons: <AiIcon.AiFillHome />,
        cName: "nav-text",
    }, 

]