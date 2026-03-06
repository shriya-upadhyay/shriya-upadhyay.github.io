import React, { useRef, useState, useEffect } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaBars, FaTimes, FaMedium } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import Shriya_Upadhyay_Headshot from '../assets/Shriya_Upadhyay_Headshot.png'; // Import the image
import AboutMe from './AboutMe';






function Home() {

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
        window.open('https://drive.google.com/file/d/17xs-iWXROwL5il0SKhN2ABy_hC00IXDE/view?usp=sharing', '_blank');
    };

    const XClick = () => {
        window.open('https://x.com/ushriya19', '_blank');
    };


    const TAGLINE = "Software engineer. USC '25. Building things.";
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < TAGLINE.length) {
                setTypedText(TAGLINE.slice(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
            }
        }, 75);
        return () => clearInterval(interval);
    }, []);

    const aboutRef = useRef(null);

    const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="home">
          <div className="hero-row">
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
                <button onClick={XClick} className="social-buttons">
                  <FaXTwitter id="x" />
                </button>
              </div>
              <p id="Hi"> Hi I'm </p>
              <hr className='line'/>
              <h1 id = "name">Shriya <br />Upadhyay </h1>
              <p className="typing" id="tagline">{typedText}<span className="typing-caret">&nbsp;</span></p>
              <button id="more" onClick={scrollToAbout}> About me </button>
            </div>
            <div className='profile'> 
              <div className='blueCircle'> </div>
              <img src={Shriya_Upadhyay_Headshot} alt="Description of image" className='image_shriya' />
            </div>
          </div>
          <AboutMe />
        </div>
    )

}

export default Home;
