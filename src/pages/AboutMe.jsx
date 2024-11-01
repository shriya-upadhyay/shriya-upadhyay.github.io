import './AboutMe.css';
import React, { useState } from 'react';
import PresentingPic from '../assets/shriya_presenting_pic.jpg'; // Import the image



function AboutMe() {

    return  (
        <div className="aboutMe">
        <h1 id = "title"> About Me </h1>

        <h2 id = "description"> I am a third-year Computer Science Student at the University of Southern California interested in blockchain, socially assistive robotics, and information security.
        </h2>

        <h2 id = "passionate" > Passionate about learning </h2>

        <img src={PresentingPic} alt="Description of image" className='image_presenting' />

        <p id='full_para'> 
        I am a junior at the University of Southern California’s Viterbi School of Engineering. I am pursuing a B.S. in Computer Science with a minor in Business Finance and a specialization in Blockchain. I aim to leverage my expansive technical knowledge and knack for problem-solving to develop creative technical solutions to societal dilemmas. I have a strong foundation in C++, Python, Java, HTML/CSS/JS, and ReactJS, and I have utilized these languages through academic, personal, and research projects. <br /> <br/ > I have also been privileged to participate in undergraduate research in socially assistive robotics. Through this experience, I have explored the intersection of psychology and technology, gaining technical skills and deepening my understanding of complex human behavior. <br /> <br /> In my free time, I am an avid tennis player, podcast listener, self-proclaimed coffee aficionado, and very invested in sustainable fashion. In the future, I hope to continue to explore human-computer interaction through research and industry opportunities.
        </p>
        </div>
    )


}


export default AboutMe;
