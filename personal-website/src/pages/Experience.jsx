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
    date="September 2022 - Present"
    dateClassName='date'
    iconStyle={{ background: '#723E31', color: '#fff' }}
    icon={<FaCircle />}
  >
    <h3 className="vertical-timeline-element-title">CURVE Fellowship Researcher</h3>
    <h4 className="vertical-timeline-element-subtitle"> Center for Undergraduate Research in Viterbi Engineering – Interaction Lab</h4>
    <p className='vertical-timeline-element-description'>
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
    iconStyle={{ background: '#723E31', color: '#fff' }}
    icon={<FaCircle />}
  >
    <h3 className="vertical-timeline-element-title">AI & Data Analytics Extern</h3>
    <h4 className="vertical-timeline-element-subtitle"> igniteXL Ventures</h4>
    <p className='vertical-timeline-element-description'>
       <li> Conducted research using platforms like Crunchbase and the internet to gather data and insights about startup performance to develop a report for igniteXL venture capital team </li>  
        <li> Produced a concise and impactful investment summary incorporating research insights and recommendations </li>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element"
    contentStyle={{ background: '#723E31', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #723E31' }}
    date="January 2023 - April 2023"
    dateClassName='date'
    iconStyle={{ background: '#723E31', color: '#fff' }}
    icon={<FaCircle />}
  >
    <h3 className="vertical-timeline-element-title">exploreCSR Researcher</h3>
    <h4 className="vertical-timeline-element-subtitle"> Center of Computational Media Intelligence</h4>
    <p className='vertical-timeline-element-description'>
       <li> Conducted Google-sponsored research on the intersection of human-centered AI and the media humans consume </li>  
        <li> Experimented with audio, video, and text-based machine learning technologies using T ensorFlow to develop effective models </li>
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
       <li> Designed and executed timely and necessary user interface updates using HTML and CSS to the Interaction Lab website </li>  
    </p>
  </VerticalTimelineElement>


  

  </VerticalTimeline>
  


</div>
    )

}

export default Experience;