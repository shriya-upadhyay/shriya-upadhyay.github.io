import React, { useRef, useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import ShriyaPic from '../assets/shriyapic.jpg'; // Import the image
import AboutMe from './AboutMe';






function Home() {
    console.log("Home page loaded");

    const MailClick = () => {
        // Code to execute on button click
        window.open('mailto:shriyaup@usc.edu', '_blank');
        console.log("Mail clicked");
    };
    const LinkedinClick = () => {
        // Code to execute on button click
        window.open('https://www.linkedin.com/in/shriyaupadhyay/', '_blank');
    };


    const GithubClick = () => {
        // Code to execute on button click
        window.open('https://github.com/shriya-upadhyay', '_blank');
    };

    const MediumClick = () => {
        // Code to execute on button click
        window.open('https://medium.com/@shriyau19', '_blank');
    };

    const ResumeClick = () => {
        // Code to execute on button click
        window.open('https://drive.google.com/file/d/17xs-iWXROwL5il0SKhN2ABy_hC00IXDE/view?usp=sharing', '_blank');
    };

    const aboutRef = useRef(null);

    const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home">


        <div className="intro">

        <div className="contact-buttons">


                    <button onClick={MailClick} className="social-buttons">
                        <IoMdMail id="mail" />
                    </button>
                    <button onClick={LinkedinClick} className="social-buttons">
                        <FaLinkedin id="linkedin"/>
                    </button>
                    <button onClick={GithubClick} className="social-buttons">
                        <FaGithub id="github" />
                    </button>
                    <button onClick={MediumClick} className="social-buttons">
                        <FaMedium id="medium" />
                    </button>
                    <button onClick={ResumeClick} className="social-buttons">
                        <IoPerson id="resume" />
                    </button>

        </div>

            <p id="Hi"> Hi I'm </p>
            <hr className='line'/>

            <h1 id = "name">Shriya <br />Upadhyay </h1>

            <p className = "typing" id = "tagline"> Computer Science Student @ University of Southern California </p>

            <button id="more" onClick={scrollToAbout}> Click to learn more! </button>

        </div>
        <div className='profile'> 
        <div className='blueCircle'> </div>

        <img src={ShriyaPic} alt="Description of image" className='image_shriya' />
        </div>

        <div ref={aboutRef} id='about'>
        <AboutMe />

        </div>

        </div>
        
    )

}

export default Home;
