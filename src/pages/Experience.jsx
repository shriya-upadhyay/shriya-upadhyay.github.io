import './Experience.css'

function Experience() {
    return (
        <div className="Experience">
            <h1 id="title">My Experience</h1>

            <div className="experience-cards">
                <div className="exp-card">
                    <div className="exp-header">
                        <div className="exp-left">
                            <h3 className="exp-company">JPMorgan Chase</h3>
                            <h4 className="exp-title">Software Engineer Intern</h4>
                        </div>
                        <h4 className="exp-date">June 2025 – August 2025</h4>
                    </div>
                    <ul className="exp-bullets">
                        <li>Designed a Python tool to support a trading desk</li>
                    </ul>
                </div>

                <div className="exp-card">
                    <div className="exp-header">
                        <div className="exp-left">
                            <h3 className="exp-company">Blockchain at USC</h3>
                            <h4 className="exp-title">Head of Engineering</h4>
                        </div>
                        <h4 className="exp-date">September 2023 – January 2026</h4>
                    </div>
                    <ul className="exp-bullets">
                        <li>Led the engineering team for one of USC's largest technical student organizations</li>
                        <li>Ran Web3 developer workshops and helped grow the technical community on campus</li>
                        <li>Co-organized the Southern California Blockchain Conference (SCBC) — a multi-track annual conference and hackathon in Los Angeles</li>
                    </ul>
                </div>

                <div className="exp-card">
                    <div className="exp-header">
                        <div className="exp-left">
                            <h3 className="exp-company">Kintsugi Global</h3>
                            <h4 className="exp-title">Software Engineer Intern</h4>
                        </div>
                        <h4 className="exp-date">June 2024 – August 2024</h4>
                    </div>
                    <ul className="exp-bullets">
                        <li>Built a full-stack web and mobile platform supporting 10+ decentralized applications</li>
                        <li>Developed a crowdfunding feature using React.js, Node.js, and crypto APIs, improving both creator and supporter experience</li>
                    </ul>
                </div>

                <div className="exp-card">
                    <div className="exp-header">
                        <div className="exp-left">
                            <h3 className="exp-company">Center for Undergraduate Research in Viterbi Engineering – Interaction Lab</h3>
                            <h4 className="exp-title">CURVE Fellowship Researcher</h4>
                        </div>
                        <h4 className="exp-date">August 2022 – January 2026</h4>
                    </div>
                    <ul className="exp-bullets">
                        <li>Co-authored research on LLM-powered socially assistive robots for CBT homework support; presented at IEEE RO-MAN 2025</li>
                        <li>Designed and administered a study with 200+ participants and a virtual support group therapy facilitator</li>
                        <li>Engineered a web application with a ChatGPT API-based chatbot for a 42-participant study on LLM efficacy in supporting CBT practice</li>
                        <li>Conducted user research and data analysis using thematic and adherence analysis techniques</li>
                    </ul>
                </div>

                <div className="exp-card">
                    <div className="exp-header">
                        <div className="exp-left">
                            <h3 className="exp-company">igniteXL Ventures</h3>
                            <h4 className="exp-title">AI & Data Analytics Extern</h4>
                        </div>
                        <h4 className="exp-date">June 2023 – July 2023</h4>
                    </div>
                    <ul className="exp-bullets">
                        <li>Conducted comprehensive research using platforms like Crunchbase, sifting through 300+ startup profiles to gather data and insights about startup performance, driving development of a detailed report for the igniteXL venture capital team</li>
                        <li>Produced impactful investment summary with insights influencing evaluation of 50+ investment opportunities</li>
                    </ul>
                </div>

                <div className="exp-card">
                    <div className="exp-header">
                        <div className="exp-left">
                            <h3 className="exp-company">Center for Undergraduate Research in Viterbi Engineering – Interaction Lab</h3>
                            <h4 className="exp-title">WebMaster</h4>
                        </div>
                        <h4 className="exp-date">August 2022 – April 2023</h4>
                    </div>
                    <ul className="exp-bullets">
                        <li>Designed and executed timely and necessary user interface updates using HTML and CSS to the <a href="https://uscinteractionlab.web.app/">Interaction Lab</a> website</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;
