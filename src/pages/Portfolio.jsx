import React, { useState } from 'react';

import './Portfolio.css'

function Portfolio() {

    return (
        <div className='Portfolio'> 

        <h1 id = "title"> My Projects </h1>

        <div className='projects'>


        {/* Project 1 */}
        
        <div className="project_background"> 

        <h2 id='project1_title'> Amazon Alexa Skill </h2>


        <p id='project1_description'> Created a personal and experimental Alexa Skill that employed natural language processing/generation as well as automatic speech recognition to answer questions from publicly published content about Onyx by J.P. Morgan. </p>

        <button onClick={() => {
      window.open('https://github.com/shriya-upadhyay/alexa-skill', '_blank');
    }}> Learn More </button>

        

        </div>



        {/* Project 2 */}
        
        <div className="project_background"> 

        <h2 id='project2_title'> GPT-3 Sentiment Classifier Algorithm </h2>

        <p id='project2_description'>  Designed a Python algorithm to generate sentiment analysis from a tweet input using GPT-3, an OpenAI text-generation model. </p>

        <button onClick={() => {
      window.open('https://github.com/shriya-upadhyay/gpt3tweetclassification', '_blank');
    }}> Learn More </button>
        </div>



        {/* Project 3*/}
        
        <div className="project_background"> 

        <h2 id='project3_title'> HuntSC​ </h2>

        <p id='project3_description'> Developed a React.js Web Application designed to help USC student organizations and groups locate event venues. </p>

        <button onClick={() => {
      window.open('https://github.com/nlee5425/HuntSC', '_blank');
    }}> Learn More </button>
        </div>



        {/* Project 4 */}

        
        <div className="project_background"> 

        <h2 id='project3_title'> schedify </h2>

        <p id='project3_description'> Built a software tool using Python and Flask that utilizes the OpenAI API to create the optimal schedule for a user based on given characteristics (e.g. wake-up time, sleep time, and to-do’s) </p>

        <button onClick={() => {
      window.open('https://github.com/shriya-upadhyay/schedify', '_blank');
    }} > Learn More </button>
        </div>


        {/* Project 5 */}

        
        <div className="project_background"> 

        <h2 id='project5_title'> BeatCode </h2>

        <p id='project5_description'> Collaborated with a team to develop a multi-player game platform using Java, ReactJS, Monaco Code Editor, and Springboot that enables users to compete with their peers on Leetcode questions. Users can create rooms and join rooms to compete and save their progress. </p>

        <button onClick={() => {
      window.open('https://github.com/BeatCodeOrg', '_blank');
    }}> Learn More </button>
        </div>


        {/* Project 6 */}

        
        <div className="project_background"> 

        <h2 id='project6_title'> Healthy Heart Hub </h2>

        <p id='project6_description'> Collaborated with a team to create a web application that supports the effort to mitigate the risk of Sudden Cardiac Arrest in teens. It serves as a management tool tailored to multiple types of users, including students, coaches, and doctors. The tech stack included: Python, ReactJS, and a Postgres SQL Database.</p>

        <button onClick={() => {
      window.open('https://github.com/cfgdelaware24/Team-12', '_blank');
    }}> Learn More </button>
        </div>


        {/* Project 7 */}

        
        <div className="project_background"> 

        <h2 id='project7_title'> Let's Go Camping! </h2>

        <p id='project7_description'> Developed a web application enabling users to search for parks, favorite them, add friends, compare lists, and suggest parks to
        friends, with data stored in a relational database. The tech stack included: Java, React,js, Spring Boot, AGILE, Unit Testing, Database Management, NPS API</p>

        <button onClick={() => {
      window.open('https://github.com/CSCI310-20241/project-team-7', '_blank');
    }}> Learn More </button>
        </div>



        </div>



        </div>

    )


}


export default Portfolio;
