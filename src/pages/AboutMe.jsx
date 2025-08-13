import './AboutMe.css';
import React from 'react';
import PresentingPic from '../assets/shriya_presenting_pic.jpg'; 
import ShriyaSpeaking from '../assets/ShriyaSpeaking.png';

function AboutMe() {
    return (
        <div className="aboutMe">
            <div className="aboutMe-row">
                <div className="aboutMe-text">
                    <h1 id="title">About Me</h1>
                    <h2 id="description">
                        A senior at USC's Viterbi School of Engineering, studying computer science and specializing in blockchain technology.
                    </h2>
                    <p id='full_para'>
                        I'm pursuing a B.S. in Computer Science with a minor in Business Finance and a specialization in Blockchain. My goal is to leverage my technical expertise and problem-solving skills to develop innovative solutions that address real-world challenges. With a strong foundation in C++, Python, Java, and web technologies (HTML/CSS/JS, ReactJS), I've applied these skills across academic, research, and personal projects.
                        <br /><br />
                        My research experience in socially assistive robotics has given me unique insights into the intersection of psychology and technology. This work has not only enhanced my technical capabilities but also deepened my understanding of human-computer interaction and its potential to improve lives.
                        <br /><br />
                        Beyond my academic and professional pursuits, I'm an avid tennis player, podcast enthusiast, and sustainable fashion advocate. I'm excited to continue exploring the frontiers of human-computer interaction through both research and industry opportunities.
                    </p>
                </div>
                <div className="aboutMe-images">
                    <img src={PresentingPic} alt="Shriya presenting at a conference" className='image_presenting' />
                    <img src={ShriyaSpeaking} alt="Shriya speaking at a blockchain conference" className='image_presenting' />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
