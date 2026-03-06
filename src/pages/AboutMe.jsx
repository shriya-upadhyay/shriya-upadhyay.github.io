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
                        Software engineer. USC CS grad. Building in fintech, Web3, and AI.
                    </h2>
                    <p id='full_para'>
                        I graduated from USC's Viterbi School of Engineering in December 2025 with a B.S. in Computer Science. Right now I'm in a gap period doing what I actually love: building projects, writing, and going deep on Web3 and AI.
                        <br /><br />
                        My research at USC's Interaction Lab focused on socially assistive robotics. I co-authored work on LLM-powered robots designed to support cognitive behavioral therapy homework and presented it at IEEE RO-MAN 2025. On the community side, I served as Head of Engineering at Blockchain at USC, where I also co-organized the Southern California Blockchain Conference each year.
                        <br /><br />
                        Outside of code: I play tennis, cook daily, listen to too many podcasts, and am always planning the next trip.
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
