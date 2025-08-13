import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCircle } from "react-icons/fa6";
import './Experience.css'



function Experience() {

    return (
        <div className='Experience'> 

        <h1 id = "title"> My Experience </h1>

  <VerticalTimeline className="timeline" lineColor='#A67564'>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: '#723E31', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #723E31' }}
    date="June 2025 - August 2025"
    dateClassName='date'
    iconStyle={{ background: '#723E31', color: '#fff' }}
    icon={<FaCircle />}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">  JPMorgan Chase </h4>
    <p className='vertical-timeline-element-description'>
       <li> Designed a Python tool to support a trading desk </li>  
    </p>
  </VerticalTimelineElement>
    
  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: '#723E31', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #723E31' }}
    date="June 2024 - August 2024"
    dateClassName='date'
    iconStyle={{ background: '#723E31', color: '#fff' }}
    icon={<FaCircle />}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">  Kintsugi Global </h4>
    <p className='vertical-timeline-element-description'>
       <li> Designed and developed a full-stack web and mobile platform, enabling seamless support for 10+ decentralized applications </li>  
        <li> Spearheaded the development of an intuitive and scalable crowdfunding feature by leveraging React.js, Node.js, and crypto
        APIs, enhancing both creator and supporter experience and engagement </li>
    </p>
  </VerticalTimelineElement>

        <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: '#723E31', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #723E31' }}
    date="September 2022 - Present"
    dateClassName='date'
    iconStyle={{ background: '#723E31', color: '#fff' }}
    icon={<FaCircle />}
  >
    <h3 className="vertical-timeline-element-title">CURVE Fellowship Researcher</h3>
    <h4 className="vertical-timeline-element-subtitle"> Center for Undergraduate Research in Viterbi Engineering – Interaction Lab</h4>
    <p className='vertical-timeline-element-description'>
      <li> Designing and administering a study with 200+ participants and a virtual support group therapy facilitator</li>
       <li> Engineered a web application featuring a ChatGPT API-based chatbot for a 42-participant study to determine the efficacy of an LLM in supporting cognitive behavioral therapy practice for university students </li>  
        <li> Engage in hands-on user research and performed detailed data analysis using thematic and adherence analysis techniques </li>
    </p>
  </VerticalTimelineElement>


    <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: '#723E31', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #723E31' }}
    date="June 2023 - July 2023"
    dateClassName='date'
    iconStyle={{ background: '#723E31', color: '#ffff' }}
    icon={<FaCircle />}
  >
    <h3 className="vertical-timeline-element-title">AI & Data Analytics Extern</h3>
    <h4 className="vertical-timeline-element-subtitle"> igniteXL Ventures</h4>
    <p className='vertical-timeline-element-description'>
       <li> Conducted comprehensive research using platforms like Crunchbase, sifting through over 300+ startup profiles to gather data and insights about startup performance, driving development of a detailed report for the igniteXL venture capital team </li>  
        <li> Produced impactful investment summary with insights influencing evaluation of 50+ investment opportunities </li>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: '#723E31', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #723E31' }}
    date="January 2023 - April 2023"
    dateClassName="date"
    iconStyle={{ background: '#723E31', color: '#fff' }}
    icon={<FaCircle />}
  >
    <h3 className="vertical-timeline-element-title">WebMaster</h3>
    <h4 className="vertical-timeline-element-subtitle"> Center for Undergraduate Research in Viterbi Engineering – Interaction Lab</h4>
    <p className='vertical-timeline-element-description'>
       <li> Designed and executed timely and necessary user interface updates using HTML and CSS to the <a href="https://uscinteractionlab.web.app/">Interaction Lab </a> website </li>  
    </p>
  </VerticalTimelineElement>


  

  </VerticalTimeline>
  


</div>
    )

}

export default Experience;