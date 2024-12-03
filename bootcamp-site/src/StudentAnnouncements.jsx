import React from "react";
import logo from './assets/App-Dev-Logo.png'
import "./App.css"
import CardAnnouncements from "./CardAnnouncements";
import { Link } from "react-router-dom";

function StudentAnnouncements() {
    return (
        <>
            <div className='title'>
                <img id='logo' src= {logo} alt="App Dev Logo" />
                <h1> App Dev Bootcamp Announcements </h1>
            </div>

            <div className="Student-Announcements">
                <div className="announcement-card">
                <CardAnnouncements title="Accenture Event this Tuesday!!" 
                text="Hi everyone, hope you all had a restful weekend. The Accenture event overlaps with our normal bootcamp time, so we have a couple adjustments.
                Bootcamp will start promptly at 7:35pm at CSI 1121 (our usual room). If you want to network with the Accenture speakers, prioritize that and then 
                come to bootcamp after. This will our last in-person lecture for the semester so please come if you can! We’re gonna go until 8:35pm and we understand 
                that’s a little late so you’re free to leave around 8:15pm, but it would be great if you could stay the full time because we will be learning about SQL
                and database knowledge which will be important for your projects. See you Tuesday!!" 
                date="November 17th, 2024" />
                </div>
                <div className="announcement-card">
                <CardAnnouncements title="Reminders for Accenture Event on November 19th" 
                text="reminder that we are having the Accenture event next Tuesday 6:30pm in Antonov auditorium. This is required for all of you! Please be prepared
                with a printed copy of your most updated resume" 
                date="November 14th, 2024" />
                </div>
                <div className="announcement-card">
                <CardAnnouncements title="Bootcamp Hackathon Prompt" 
                text="Hello bootcampers!! We are having our first App Dev Bootcamp Hackathon this semester! The prompt is: Imagine you are the Director of Education 
                for App Dev Club. Build a web app that facilitates the bootcamp process. You have until December 3rd at 7:00pm to submit your project. You will be 
                presenting with your team on December 3rd at 7:00pm in our usual bootcamp room CSI 1121. Detailed instructions for this hackathon can be found in 
                the document link below. Happy coding!! https://docs.google.com/document/d/13GH77ppbY0O1szoMAVyKTgVk0ndZx6JioZaKiDTbGvk/edit?usp=sharing" 
                date="November 12th, 2024" />
                </div>
                <div className="announcement-card">
                <CardAnnouncements title="Quotes for CMNS Board of Directors" 
                text="I hope everyone is doing well! Next week, our team will have the opportunity to speak with the CMNS Board of Directors. I’d love for anyone in
                the app dev community to share how this club has impacted their life. If app dev has helped with anything. whether it’s about career support (like 
                helping you get an internship), community/social benefits, building your tech background, or anything else you want to share—please reach out to me 
                via dms. We want to feature these quotes to showcase the true impact this club is making for students on campus. Hopefully showing real quotes can 
                help us get more support so we can create more stories, similar to yours, in the future. Thank you, everyone!" 
                date="October 31, 2024" />
                </div>
                <div className="announcement-card">
                <CardAnnouncements title="App Dev Professional Headshots" 
                text="we are considering doing App Dev Professional headshots in front of Iribe for everyone. It would be a good way for us to brand our LinkedIns 
                similar to other clubs on campus, please like this is you are interested! Also please everyone try to put app dev in your LinkedIn if you are 
                comfortable with it. Putting that you are involved helps people know who's in the community. Those who are on project teams, you can still put the 
                sponsor company but please make clear that you are involved in App Dev using our company logo or in your activities or something :)" 
                date="October 12th, 2024" />
                </div>
                <div className="announcement-card">
                <CardAnnouncements title="Accenture Event on September 18th" 
                text="Join us for an exclusive evening with Accenture on September 18th from 6:30-7:30pm in Antonov Auditorium! This event offers a great opportunity
                to network with Accenture employees, explore their company culture, and discover internship and full-time roles with FREE pizza being provided! Don’t 
                miss out—bring your questions and curiosity! We can’t wait to see you there" 
                date="September 14th, 2024" />
                </div>
                <div className="announcement-card">
                <CardAnnouncements title="App Dev Professional Headshots" 
                text="Hi everyone, We're thrilled to announce that we are hosting an exclusive event with NSA's Laboratory of Telecommunication Sciences on September 
                16th from 6:30-7:30pm in CSI 1115! This is a great opportunity to network with LTS professionals and learn about their internship opportunities and 
                full-time roles! Mark your calendars and make sure you don't miss out on this!" 
                date="September 12th, 2024" />
                </div>
-             
-            </div>
        </>
    )
}

export default StudentAnnouncements;