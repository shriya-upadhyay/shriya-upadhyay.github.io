import React, { useState } from 'react';

import './Portfolio.css'

function Portfolio() {

    return (
        <div className='Portfolio'> 

        <h1 id = "title"> My Projects </h1>

        <div className='projects'>

        <div className='first_level_projects'> 

        {/* Project 1 */}
        <div className='project1'>
        
        <div className="project_background"> 

        <h2 id='project1_title'> Amazon Alexa Skill </h2>


        <p id='project1_description'> Created a personal and experimental Alexa Skill that employed natural language processing/generation as well as automatic speech recognition to answer questions from publicly published content about Onyx by J.P. Morgan. </p>

        <button> Learn More </button>

        

        </div>

        </div>


        {/* Project 2 */}
        <div className='project2'>
        
        <div className="project_background"> 

        <h2 id='project2_title'> GPT-3 Sentiment Classifier Algorithm </h2>

        <p id='project2_description'>  Designed a Python algorithm to generate sentiment analysis from a tweet input using GPT-3, an OpenAI text-generation model. </p>

        <button> Learn More </button>
        </div>

        </div>


        {/* Project 3*/}
        <div className='project3'>
        
        <div className="project_background"> 

        <h2 id='project3_title'> HuntSC​ </h2>

        <p id='project3_description'> Developed a React.js W eb Application designed to help USC student organizations and groups locate event venues. </p>

        <button> Learn More </button>
        </div>

        </div>
        </div>



        </div>

        </div>
    )


}


export default Portfolio;
