import React from "react";
import NavBar from "./NavBar"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer";
import profileText from "../assets/profileText"
import "../assets/css/style.css"

function MainPage() {
        return (
            <div>
                <NavBar profileText={profileText}/>
                <div className="container">
                    <AboutMe profileText={profileText}/>
                    <Projects profileText={profileText}/>
                    <Contact profileText={profileText}/>
                    <Footer profileText={profileText}/>
                </div>
            </div>
        );
}

export default MainPage;