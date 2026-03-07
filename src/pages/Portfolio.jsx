import './Portfolio.css';
import GitHubGraph from '../components/GitHubGraph';


const projects = [
    {
        title: "Meridian",
        description: "Built a private cross-border settlement app on Canton Network where senders, recipients, and regulators each see a completely different slice of the same transaction",
        tags: ["Web3", "DAML", "Canton Network", "React.js", "TypeScript"],
        url: "https://github.com/shriya-upadhyay/meridian"
    },
    {
        title: "Spoiler Alert",
        description: "Developed a food monitoring system that combines Arduino hardware with a web app. An LCD display and RGB LEDs show food status in real time, a DHT sensor tracks temperature and humidity to detect spoilage, and GPT-4o generates recipe suggestions for ingredients about to expire.",
        tags: ["React.js", "Python", "Flask", "OpenAI API"],
        url: "https://github.com/shriya-upadhyay/spoiler-alert"
    },
    {
        title: "Tea On-Chain",
        description: "Built privacy-preserving women’s safety platform using zero-knowledge proofs for anonymous identity verification",
        tags: ["Web3", "Solidity", "Next.js", "Typescript", "ZK-SNARKS"],
        url: "https://github.com/shriya-upadhyay/tea-on-chain"
    },
    {
        title: "Real ID Appointment Scheduler",
        description: "Wrote a scraper that monitors the NJ MVC website for Real ID appointment openings and sends an email alert the moment a slot is available.",
        tags: ["Python", "BeautifulSoup", "AWS EC2"],
        url: "https://github.com/shriya-upadhyay/real-id-appointment-checker"
    }, 
    {
        title: "Healthy Heart Hub",
        description: "Built a health management platform to reduce Sudden Cardiac Arrest risk in young athletes, created at JPMorgan Code for Good. Designed for students, coaches, and doctors.",
        tags: ["Python", "React.js", "PostgreSQL"],
        url: "https://github.com/cfgdelaware24/Team-12"
    },
    {
        
        title: "Let’s Go Camping!",
        description: "Built a social park discovery app where users can search national parks, save favorites, add friends, and share recommendations.",
        tags: ["Java", "React.js", "Spring Boot", "NPS API"],
        url: "https://github.com/CSCI310-20241/project-team-7"
    },
    {
        title: "BeatCode",
        description: "Built a multiplayer competitive coding platform where users can create rooms and compete on Leetcode-style questions in real time.",
        tags: ["Java", "React.js", "Spring Boot", "Monaco Editor"],
        url: "https://github.com/BeatCodeOrg"
    },
    {
        title: "schedify",
        description: "Built an AI-powered scheduling tool that takes your to-dos and daily preferences and generates an optimized schedule using the OpenAI API.",
        tags: ["Python", "Flask", "OpenAI API"],
        url: "https://github.com/shriya-upadhyay/schedify"
    },
    {
        title: "HuntSC",
        description: "Built a React.js app to help USC student orgs and groups find and share event venues on campus.",
        tags: ["React.js", "JavaScript", "CSS"],
        url: "https://github.com/nlee5425/HuntSC"
    },
    {
        title: "GPT-3 Sentiment Classifier",
        description: "Built a Python sentiment classifier using GPT-3 to analyze tweet content and output positive, negative, or neutral labels.",
        tags: ["Python", "GPT-3", "OpenAI API", "NLP"],
        url: "https://github.com/shriya-upadhyay/gpt3tweetclassification"
    },
    {
        title: "Amazon Alexa Skill",
        description: "Built an Alexa skill using NLP and automatic speech recognition to answer questions about Onyx by J.P. Morgan from publicly available content.",
        tags: ["Python", "NLP", "ASR", "Alexa SDK"],
        url: "https://github.com/shriya-upadhyay/alexa-skill"
    },
    
    
    
    

];

function Portfolio() {
    return (
        <div className='Portfolio'>
            <h1 id="title">My Projects</h1>
            <GitHubGraph />
            <div className='projects'>
                {projects.map((project, index) => (
                    <div className="project_background" key={index}>
                        <h2 className="project_title">{project.title}</h2>
                        <p className="project_description">{project.description}</p>
                        <div className="tech-tags">
                            {project.tags.map((tag, i) => (
                                <span className="tech-tag" key={i}>{tag}</span>
                            ))}
                        </div>
                        <button onClick={() => window.open(project.url, '_blank')}>
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
