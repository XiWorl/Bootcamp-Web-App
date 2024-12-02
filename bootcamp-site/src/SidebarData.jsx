import React from "react";
import { useState } from "react";
import * as FaIcon from "react-icons/fa"
import * as AiIcon from "react-icons/ai"
import * as IoIcon from "react-icons/io"

export const Sidebar = [
    {
        title: "Home",
        path: "/",
        icons: <AiIcon.AiFillHome />,
        cName: "nav-text",
    }, 
    {
        title: "Announcements",
        path: "/announcements",
        icons: <AiIcon.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Lectures",
        path: "/lectures",
        icons: <AiIcon.AiFillHome />,
        cName: "nav-text",
    }, 
    {
        title: "Homework",
        path: "/homeworks",
        icons: <AiIcon.AiFillHome />,
        cName: "nav-text",
    }, 
    {
        title: "Mentor Groups",
        path: "/mentorgroups",
        icons: <AiIcon.AiFillHome />,
        cName: "nav-text",
    }, 

]