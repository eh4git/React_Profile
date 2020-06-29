import React, { Component } from "react";
import NavBar from "./NavBar"
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer";
import profileText from "../assets/profileText"

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