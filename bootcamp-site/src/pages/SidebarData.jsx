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
        path: "/AdminAnnouncements",
        icons: <AiIcon.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Lectures",
        path: "/AdminLectures",
        icons: <AiIcon.AiFillHome />,
        cName: "nav-text",
    }, 
    {
        title: "Homework",
        path: "/AdminHomework",
        icons: <AiIcon.AiFillHome />,
        cName: "nav-text",
    }, 
    {
        title: "Mentor Groups",
        path: "/AdminMentorGroups",
        icons: <AiIcon.AiFillHome />,
        cName: "nav-text",
    }, 

]