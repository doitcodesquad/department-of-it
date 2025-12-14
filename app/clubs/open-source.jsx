import React from 'react'
import Image from 'next/image'
import test from '/public/computer.svg'
import { Icon } from '@iconify/react'
import { motion, stagger } from 'framer-motion'

export default function ClubDetails({ navigation }) {
    const [openFaq, setOpenFaq] = React.useState(null);
    const [openDomain, setOpenDomain] = React.useState(null);

    const CodeEditorDescription = ({ description }) => {
        const [lines, setLines] = React.useState([]);
        const textRef = React.useRef(null);

        React.useEffect(() => {
            if (textRef.current) {
                const lineHeight = parseInt(window.getComputedStyle(textRef.current).lineHeight);
                const height = textRef.current.clientHeight;
                const lineCount = Math.ceil(height / lineHeight);
                setLines(Array.from({ length: lineCount }, (_, i) => i + 1));
            }
        }, [description]);

        return (
            <div className="border-2 border-black font-mono text-sm">
                <div className="bg-orange-50 flex justify-between gap-2 px-3 py-2 border-b-2 border-black">
                    <div className="flex gap-2">
                        <Icon icon="ri:terminal-box-fill" className="text-xl" />
                        <div className="font-bold">Terminal</div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-3 h-3 border-2 border-black rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 border-2 border-black rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 border-2 border-black rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div className="bg-primary/30 flex md:min-h-[14.42rem]">
                    <div className="border-r-2 border-black/30 px-2 text-right text-gray-500 flex flex-col justify-center items-center">
                        {lines.map((num) => (
                            <div key={num} className="select-none leading-6">{num}</div>
                        ))}
                    </div>
                    <pre ref={textRef} className="whitespace-pre-wrap p-3 text-base md:text-xl flex-1"><span className="font-semibold">{`$ `}</span>
                        {description}
                    </pre>
                </div>
            </div>
        );
    };

    const clubData = {
        name: 'OPEN SOURCE CLUB',
        memberCount: '25',
        leader: 'Nimra Wani & Milad Ajaz Bhat',
        collaboration: 'In collaboration with Open Source Global',
        meetingDay: 'Weekly',
        description: 'The Open Source Club is a Code Squad initiative focused on collaborative development, real world problem solving, and contributing to global open source projects in partnership with Open Source Global.'
    }

    const terminalVariants = {
        offscreen: { x: -100, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", duration: 1.82 }
        }
    };



    const infoVariants = {
        offscreen: { x: 100, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", duration: 1.82, staggerChildren: 0.3 }
        }
    }

    const faqData = [
        { q: "Do I need prior open source experience?", a: "No. Beginners are welcome and guided through the process." },
        { q: "Is this club only for coding?", a: "No. Documentation, design, testing, and research contributions are equally valued." },
        { q: "How is this different from other Code Squad clubs?", a: "This club focuses on making projects open, collaborative, and publicly accessible." },
        { q: "How is Open Source Global involved?", a: "The club follows Open Source Global's mission and best practices and collaborates on initiatives when applicable." },
        { q: "Can projects from other clubs be made open source here?", a: "Yes. This club supports all Code Squad clubs in open sourcing their projects." }
    ];

    const projectDomains = [
        { name: 'AI/ML', icon: 'heroicons:cpu-chip-solid' },
        { name: 'App Dev', icon: 'mdi:cellphone-cog' },
        { name: 'Coding', icon: 'ri:code-box-fill' },
        { name: 'Cyber Security', icon: 'mdi:shield-lock' },
        { name: 'GATE', icon: 'healthicons:i-exam-qualification' },
        { name: 'Startups', icon: 'mdi:rocket-launch' },
        { name: 'IoT', icon: 'mdi:chip' },
        { name: 'Networking', icon: 'mdi:lan' },
        { name: 'Research', icon: 'material-symbols-light:lab-research-sharp' },
        { name: 'Robotics', icon: 'mdi:robot' },
        { name: 'Web Dev', icon: 'mdi:web' }
    ];

    const projectIdeas = [
        {
            domain: 'AI and Machine Learning',
            icon: 'heroicons:cpu-chip-solid',
            projects: [
                {
                    name: 'Campus Chatbot',
                    description: 'An AI powered chatbot that answers common campus related questions such as departments, events, deadlines, and facilities. It can be trained on FAQs and documents provided by the university.',
                    details: 'This project introduces students to Natural Language Processing (NLP) and conversational AI. Contributors will work with intent recognition, entity extraction, and response generation. The chatbot can be built using frameworks like Rasa, Dialogflow, or custom transformer models. It serves as a practical introduction to building AI systems that interact with users in natural language.',
                    value: 'Reduces repetitive queries and introduces students to NLP and conversational AI.'
                },
                {
                    name: 'Student Performance Analytics Tool',
                    description: 'A machine learning based system that analyzes attendance, marks, and activity data to identify learning patterns and improvement areas.',
                    details: 'This tool uses supervised learning algorithms to predict student performance and identify at-risk students early. Contributors will learn data preprocessing, feature engineering, model training, and visualization. The system can generate insights for both students and faculty, helping personalize learning approaches and interventions.',
                    value: 'Helps students and faculty understand trends using data driven insights.'
                },
                {
                    name: 'Open Student Dataset Platform',
                    description: 'A curated collection of anonymized student related datasets for academic and ML practice.',
                    details: 'This platform hosts clean, well-documented datasets covering academic performance, survey responses, and behavioral patterns. All data is anonymized and ethically sourced. Contributors can help with data cleaning, documentation, API development, and building sample notebooks that demonstrate how to use the datasets for various ML tasks.',
                    value: 'Provides clean, ethical datasets for learning and research.'
                },
                {
                    name: 'AI Resume Feedback Tool',
                    description: 'An AI utility that reviews resumes and gives suggestions on structure, clarity, and missing sections.',
                    details: 'Using NLP techniques like named entity recognition and text classification, this tool analyzes resumes and provides actionable feedback. It can identify missing sections, suggest improvements for bullet points, check for common mistakes, and compare against industry standards. Great for learning text analysis and building practical AI applications.',
                    value: 'Practical tool with clear ML and NLP use cases.'
                }
            ]
        },
        {
            domain: 'App Development',
            icon: 'mdi:cellphone-cog',
            projects: [
                {
                    name: 'Campus Utility App',
                    description: 'A mobile app that centralizes campus services like notices, maps, contacts, and schedules.',
                    details: 'This comprehensive app brings together all essential campus information in one place. Features include interactive campus maps, department directories, event calendars, notice boards, and schedule management. Built using React Native or Flutter for cross-platform compatibility. Contributors learn the full mobile app development lifecycle from design to deployment.',
                    value: 'Solves a real student problem while teaching full app development lifecycle.'
                },
                {
                    name: 'Event Management App',
                    description: 'An app for creating, registering, and managing student events with reminders and attendance tracking.',
                    details: 'This app allows clubs and societies to create events, manage registrations, send push notifications, and track attendance using QR codes. Features include event discovery, RSVP management, calendar integration, and post-event feedback collection. Great for learning state management, push notifications, and real-time updates.',
                    value: 'Useful for clubs and societies and easy to extend.'
                },
                {
                    name: 'Student Support App',
                    description: 'An app where students can raise issues related to academics, hostels, or facilities.',
                    details: 'A ticketing system for student grievances with category-based routing, status tracking, and resolution workflows. Includes role-based access for students, staff, and administrators. Contributors learn backend integration, authentication, authorization, and building multi-user applications with different permission levels.',
                    value: 'Introduces backend integration and role based access.'
                }
            ]
        },
        {
            domain: 'Coding',
            icon: 'ri:code-box-fill',
            projects: [
                {
                    name: 'Algorithm Visualizer',
                    description: 'A web based tool that visually demonstrates sorting, searching, and graph algorithms step by step.',
                    details: 'An interactive educational tool that animates algorithms in real-time. Users can adjust speed, input custom data, and see each step explained. Covers sorting algorithms (bubble, merge, quick, heap), searching algorithms (binary, linear), and graph algorithms (BFS, DFS, Dijkstra). Built with vanilla JavaScript or React with canvas/SVG animations.',
                    value: 'Great learning resource and beginner friendly open source project.'
                },
                {
                    name: 'Coding Practice Platform',
                    description: 'A lightweight platform for practicing coding problems with test cases and explanations.',
                    details: 'A self-hosted alternative to LeetCode with curated problems, automated test case validation, and detailed explanations. Features include difficulty levels, topic tags, solution discussions, and progress tracking. Contributors can add problems, write test cases, improve the code execution engine, or enhance the UI.',
                    value: 'Encourages problem solving and clean code.'
                },
                {
                    name: 'Code Snippet Library',
                    description: 'A curated open source collection of reusable code snippets in multiple languages.',
                    details: 'A searchable repository of well-documented code snippets for common programming tasks. Each snippet includes explanation, use cases, complexity analysis, and examples. Supports multiple languages including Python, JavaScript, Java, C++, and Go. Contributors can add snippets, improve documentation, or build the search and categorization features.',
                    value: 'Useful for beginners and encourages documentation contributions.'
                }
            ]
        },
        {
            domain: 'Cyber Security',
            icon: 'mdi:shield-lock',
            projects: [
                {
                    name: 'Password Strength Analyzer',
                    description: 'A tool that checks password strength and explains common vulnerabilities.',
                    details: 'An educational tool that analyzes passwords against common attack vectors including dictionary attacks, pattern matching, and entropy calculation. Provides detailed feedback on why a password is weak and suggests improvements. Includes information about password managers and best practices. All analysis happens client-side for privacy.',
                    value: 'Simple, ethical, and awareness focused security project.'
                },
                {
                    name: 'Phishing Awareness Simulator',
                    description: 'A simulated environment that teaches users how phishing attacks work and how to detect them.',
                    details: 'An interactive training platform with simulated phishing emails, fake login pages, and educational content. Users learn to identify red flags like suspicious URLs, urgent language, and spoofed sender addresses. Includes quizzes, progress tracking, and certificates. Designed purely for education without any actual malicious capabilities.',
                    value: 'Educational without performing real attacks.'
                },
                {
                    name: 'Secure Login Module',
                    description: 'An open source authentication system demonstrating best security practices.',
                    details: 'A reference implementation of secure authentication including password hashing (bcrypt/argon2), rate limiting, CSRF protection, secure session management, and optional 2FA. Well-documented code explains each security measure. Can be integrated into other Code Squad projects as a reusable authentication module.',
                    value: 'Reusable by other projects and clubs.'
                }
            ]
        },
        {
            domain: 'GATE Preparation',
            icon: 'healthicons:i-exam-qualification',
            projects: [
                {
                    name: 'Open GATE Question Bank',
                    description: 'A community maintained repository of subject wise GATE questions with explanations.',
                    details: 'A comprehensive collection of GATE questions organized by subject, topic, and difficulty. Each question includes detailed solutions, alternative approaches, and references to relevant concepts. Contributors can add questions, write explanations, tag topics, or improve the search and filter functionality. Built as a static site for easy hosting.',
                    value: 'Long term academic value and collaborative learning.'
                },
                {
                    name: 'Mock Test Generator',
                    description: 'A system that generates timed mock tests and provides performance analysis.',
                    details: 'An automated test generation system that creates balanced mock tests based on GATE exam pattern. Features include timer, auto-submission, instant results, detailed analytics, topic-wise performance breakdown, and comparison with previous attempts. Helps students identify weak areas and track improvement over time.',
                    value: 'Combines academics with software development.'
                },
                {
                    name: 'Collaborative Notes Platform',
                    description: 'A markdown based platform where students maintain structured subject notes.',
                    details: 'A wiki-style platform for collaborative note-taking with version control, peer review, and quality ratings. Notes are written in Markdown with support for LaTeX equations, diagrams, and code blocks. Features include search, bookmarks, and export to PDF. Encourages students to learn by teaching and creates a valuable resource for future batches.',
                    value: 'Encourages documentation and peer review.'
                }
            ]
        },
        {
            domain: 'Innovative Startups',
            icon: 'mdi:rocket-launch',
            projects: [
                {
                    name: 'Idea Validation Platform',
                    description: 'A platform where students submit startup ideas and get structured feedback.',
                    details: 'A community platform for sharing and validating startup ideas. Features include idea submission with structured templates, feedback from peers and mentors, voting system, and resources for next steps. Helps students refine their ideas before investing significant time. Includes privacy controls for sensitive ideas.',
                    value: 'Bridges tech and entrepreneurship.'
                },
                {
                    name: 'Startup Toolkit',
                    description: 'A collection of tools for pitch decks, market analysis, and planning.',
                    details: 'An open source toolkit with templates and generators for common startup needs. Includes pitch deck templates, business model canvas generator, competitor analysis frameworks, financial projection spreadsheets, and legal document templates. All tools are customizable and well-documented for easy adaptation.',
                    value: 'Reusable resource for early stage founders.'
                },
                {
                    name: 'Open Startup Research Hub',
                    description: 'A repository of case studies, failures, and lessons from startups.',
                    details: 'A curated collection of startup stories with detailed analysis of what worked and what did not. Includes case studies of successful companies, post-mortems of failed startups, industry reports, and founder interviews. Contributors can add case studies, write analyses, or improve categorization and search features.',
                    value: 'Encourages learning from real examples.'
                }
            ]
        },
        {
            domain: 'Internet of Things',
            icon: 'mdi:chip',
            projects: [
                {
                    name: 'Smart Parking System',
                    description: 'An IoT based system that tracks parking availability using sensors.',
                    details: 'A complete parking management solution using ultrasonic or infrared sensors connected to microcontrollers. Features include real-time availability display, mobile app integration, historical data analysis, and predictive availability. Contributors work on both hardware (sensor integration, communication protocols) and software (dashboard, mobile app, backend).',
                    value: 'Practical hardware and software integration project.'
                },
                {
                    name: 'Environmental Monitoring System',
                    description: 'A sensor based system that monitors air quality, temperature, and humidity.',
                    details: 'A network of environmental sensors deployed across campus that collect and visualize data in real-time. Includes air quality index calculation, temperature and humidity tracking, noise level monitoring, and alerts for unhealthy conditions. Data is stored for historical analysis and research purposes.',
                    value: 'Real world data collection and visualization.'
                },
                {
                    name: 'Smart Classroom Automation',
                    description: 'Automates lights, fans, or attendance using sensors.',
                    details: 'An automation system for classrooms that controls lighting and ventilation based on occupancy and ambient conditions. Can include automatic attendance using RFID or facial recognition. Features scheduling, manual override, energy consumption tracking, and integration with existing campus systems.',
                    value: 'Campus focused automation project.'
                }
            ]
        },
        {
            domain: 'Networking',
            icon: 'mdi:lan',
            projects: [
                {
                    name: 'Network Simulator',
                    description: 'A tool that visually demonstrates how data flows across networks.',
                    details: 'An interactive visualization tool that shows packet routing, protocol handshakes, and network topology. Users can create custom network configurations, simulate traffic, and observe how data travels through routers, switches, and firewalls. Includes tutorials explaining each concept as users interact with the simulation.',
                    value: 'Excellent learning aid for networking concepts.'
                },
                {
                    name: 'Network Monitoring Dashboard',
                    description: 'A dashboard that monitors network usage and uptime.',
                    details: 'A real-time monitoring solution that tracks network performance metrics including bandwidth usage, latency, packet loss, and device status. Features include customizable dashboards, alerting, historical data, and reporting. Can be deployed to monitor lab networks or personal home networks for learning purposes.',
                    value: 'Introduces real time data visualization.'
                },
                {
                    name: 'Protocol Learning Tool',
                    description: 'An interactive tool explaining protocols like TCP, UDP, and HTTP.',
                    details: 'An educational platform that breaks down network protocols with interactive visualizations. Shows the structure of packets, explains header fields, demonstrates handshakes, and allows users to craft and analyze packets. Includes quizzes and challenges to test understanding of protocol behavior.',
                    value: 'Concept clarity through visualization.'
                }
            ]
        },
        {
            domain: 'Research',
            icon: 'material-symbols-light:lab-research-sharp',
            projects: [
                {
                    name: 'Research Project Management Tool',
                    description: 'Helps students manage research tasks, papers, and deadlines.',
                    details: 'A project management tool tailored for academic research. Features include literature review tracking, citation management, experiment logging, deadline reminders, collaboration tools, and progress visualization. Integrates with reference managers and supports export to common formats for thesis writing.',
                    value: 'Supports academic research workflows.'
                },
                {
                    name: 'Survey Data Collection Platform',
                    description: 'A system for designing surveys and collecting structured responses.',
                    details: 'A self-hosted survey platform with form builder, response collection, and basic analytics. Supports various question types, branching logic, and anonymous responses. Includes data export, visualization, and statistical analysis features. Useful for academic research across all disciplines.',
                    value: 'Useful across disciplines.'
                },
                {
                    name: 'Open Research Dataset Repository',
                    description: 'A platform to publish and discover student research datasets.',
                    details: 'A repository for sharing research datasets with proper documentation, licensing, and citation information. Features include dataset search, preview, version control, and DOI assignment. Promotes reproducible research by making data accessible and properly documented for future researchers.',
                    value: 'Promotes reproducible research.'
                }
            ]
        },
        {
            domain: 'Robotics',
            icon: 'mdi:robot',
            projects: [
                {
                    name: 'Robot Simulation Environment',
                    description: 'A software simulation for testing robot movement and control.',
                    details: 'A 2D or 3D simulation environment where users can program and test robot behaviors without physical hardware. Supports common robot configurations, sensor simulation, and physics-based movement. Includes tutorials for beginners and challenges for advanced users. Great for learning robotics concepts accessibly.',
                    value: 'Accessible robotics learning without hardware.'
                },
                {
                    name: 'Line Following Robot Codebase',
                    description: 'An open source implementation for educational robots.',
                    details: 'A well-documented codebase for line-following robots with support for multiple microcontrollers (Arduino, ESP32, Raspberry Pi). Includes PID control implementation, sensor calibration routines, and debugging tools. Designed as a learning resource with extensive comments and tutorials explaining each component.',
                    value: 'Beginner friendly robotics project.'
                },
                {
                    name: 'Vision Based Obstacle Detection',
                    description: 'Uses camera input to detect obstacles.',
                    details: 'A computer vision system for robot navigation that detects and classifies obstacles using camera input. Implements object detection, depth estimation, and path planning algorithms. Can be integrated with robot simulation or physical robots. Combines robotics with machine learning and computer vision.',
                    value: 'Combines robotics and computer vision.'
                }
            ]
        },
        {
            domain: 'Web Development',
            icon: 'mdi:web',
            projects: [
                {
                    name: 'Club Management Platform',
                    description: 'A web app to manage members, events, and announcements.',
                    details: 'A comprehensive platform for student clubs to manage their operations. Features include member directory, event creation and registration, announcement board, resource sharing, and analytics. Built with modern web technologies and designed to be easily customizable for different clubs. Directly useful for Code Squad itself.',
                    value: 'Directly useful for Code Squad.'
                },
                {
                    name: 'Student Portfolio Builder',
                    description: 'A platform that helps students create and host portfolios.',
                    details: 'A no-code or low-code platform for creating professional portfolios. Students can choose templates, add projects, skills, and experiences, and get a hosted portfolio with a custom subdomain. Includes SEO optimization, analytics, and easy updates. Great for students preparing for placements or graduate applications.',
                    value: 'High adoption and simple to extend.'
                },
                {
                    name: 'University Resource Hub',
                    description: 'A centralized portal for notes, links, and tools.',
                    details: 'A one-stop portal aggregating useful resources for students including study materials, important links, tools, and guides. Features include search, categorization, user submissions, and quality ratings. Solves the common problem of scattered resources and helps new students find what they need quickly.',
                    value: 'Solves a common student problem.'
                }
            ]
        }
    ];



    return (
        <>
            <div className="md:flex justify-between items-stretch w-full mt-8 md:border md:border-b-0 border-black">
                <div className="w-full md:w-auto border-b border-t md:border-t-0 md:border-r border-black py-2 flex justify-center items-center text-lg md:text-xl flex-shrink-0">
                    <div className="flex gap-3">
                        <div className="flex items-center gap-1 w-max border-black/30 px-3">
                            <Icon icon="material-symbols:person" />
                            <p>{`${clubData.memberCount} Active Members`}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:flex-1 min-w-0">
                    {navigation}
                </div>
            </div>


            {/* Hero Section */}
            <div className="flex flex-wrap md:flex-nowrap md:h-[83%] h-full w-full bg-emerald-50 md:border md:border-t-0 border-black relative overflow-hidden">
                <div className="flex flex-col md:w-[62.3%]">
                    <div className="flex md:flex-row flex-wrap w-full h-full justify-center md:justify-between relative">
                        <div className="flex flex-col md:px-14 md:ms-8 mt-3 p-3 text-[3rem] md:text-8xl w-full md:w-1/2 font-headline leading-tight">
                            <div>
                                <span className="outline-text">WELCOME TO</span><br />
                                {`${clubData.name}`}<br />
                            </div>
                            <div className="flex flex-col md:ms-4 m-2 md:m-3 text-2xl">
                                <div className="flex items-center w-max gap-2">
                                    <p>LED BY</p>
                                </div>
                                <p className="font-light text-2xl">{clubData.leader}</p>
                                <p className="font-light text-lg text-black/70 mt-2">{clubData.collaboration}</p>
                            </div>
                            <button className="md:ms-4 md:w-11/12 px-11 py-1 bg-primary text-lg font-light border-2 border-black">
                                Become A Member
                            </button>
                        </div>
                    </div>
                    <div className="flex relative justify-end md:mb-0">
                        <div className="flex w-full md:w-1/2 border border-black md:border-r-0 md:border-b-0 justify-center items-center gap-3 text-lg font-thin py-2 px-8 mx-3 md:mx-0">
                            <Icon icon="mdi:git" className="text-2xl" />
                            <p>Open Source Development</p>
                        </div>
                    </div>
                    <div className="hidden absolute bottom-0 md:flex justify-start flex-col w-14 p-3 border-t border-r border-black h-32 items-center">
                        <div className="text-sm">SCROLL</div>
                        <div className="w-full flex justify-center">
                            <svg className="scale-y-110 mt-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.83} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="self-end md:absolute right-0 bottom-0 h-11/12 md:w-[37.7%] border md:border-r-0 md:border-b-0 border-black m-4 md:m-0">
                    <Image
                        src={test}
                        alt="Open Source Club Illustration"
                        className="mb-11"
                        objectFit='fill'
                    />
                </div>
            </div>

            {/* About Section */}
            <motion.div
                animate={{ delay: stagger(1) }}
                className="border-t border-b border-black/30 relative flex flex-col items-center mt-[5.42rem] justify-center w-full mb-11">
                <h1 className="self-center text-[3rem] my-11">About The Club</h1>
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={terminalVariants}
                    className="w-full md:w-9/12 px-4">
                    <CodeEditorDescription description="The Open Source Club operates under the Code Squad community and aims to introduce students to open source development through hands on projects and guided contributions. The club provides a structured environment where members learn how real software is built, maintained, and improved collaboratively. Students work on practical projects, follow industry standard workflows, and contribute to repositories that are open, transparent, and publicly accessible." />
                </motion.div>

                {/* Mission and Values */}
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={infoVariants}
                    className="w-full md:w-9/12 px-4 mt-11">
                    <div className="bg-emerald-50 p-6 md:p-11 border border-black">
                        <h2 className="text-3xl font-bold mb-4">Mission & Values</h2>
                        <p className="text-black/90 mb-6">To promote open source culture within Code Squad by enabling students to collaborate openly, contribute responsibly, and build solutions that create real impact.</p>
                        <div className="flex flex-wrap gap-3">
                            {['Openness & Transparency', 'Community Driven', 'Knowledge Sharing', 'Ethical Technology', 'Real World Impact'].map((value) => (
                                <span key={value} className="bg-orange-50 px-4 py-2 border border-black text-sm">{value}</span>
                            ))}
                        </div>
                        <p className="text-black/70 mt-4 text-sm">This club follows the principles and mission of Open Source Global while operating as a core vertical of Code Squad.</p>
                    </div>
                </motion.div>
            </motion.div>


            {/* What is Open Source */}
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={infoVariants}
                className="w-full flex justify-center px-4 mb-11">
                <div className="w-full md:w-9/12 bg-orange-50 p-6 md:p-11 border border-black">
                    <h2 className="text-3xl font-bold mb-4">What is Open Source?</h2>
                    <p className="text-black/90 mb-6">Open Source Software (OSS) means the source code is publicly available. Anyone can use, study, modify, and distribute it. Development happens collaboratively across the globe.</p>
                    
                    <h3 className="text-xl font-semibold mb-3">Core Principles</h3>
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                        {[
                            { icon: 'mdi:eye', title: 'Transparency', desc: 'Code is open to inspection' },
                            { icon: 'mdi:account-group', title: 'Collaboration', desc: 'People across the world contribute' },
                            { icon: 'mdi:trophy', title: 'Meritocracy', desc: 'Good ideas win, not titles' },
                            { icon: 'mdi:heart', title: 'Community First', desc: 'Software grows with people' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-white/50 p-3 border border-black/20">
                                <Icon icon={item.icon} className="text-2xl flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold">{item.title}</p>
                                    <p className="text-sm text-black/70">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-3">Examples You Already Know</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Linux', 'Git', 'Python', 'React', 'TensorFlow'].map((tech) => (
                            <span key={tech} className="bg-emerald-50 px-4 py-2 border border-black text-sm font-medium">{tech}</span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Why an Open Source Club */}
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={infoVariants}
                className="w-full flex justify-center px-4 mb-11">
                <div className="w-full md:w-9/12 bg-emerald-50 p-6 md:p-11 border border-black">
                    <h2 className="text-3xl font-bold mb-4">Why an Open Source Club in University?</h2>
                    <p className="text-black/90 mb-6">This is not theory. This is industry practice.</p>
                    <div className="grid md:grid-cols-2 gap-3">
                        {[
                            { icon: 'mdi:briefcase', text: 'Real world development experience' },
                            { icon: 'mdi:git', text: 'Git & GitHub mastery' },
                            { icon: 'mdi:file-document', text: 'Strong resumes and portfolios' },
                            { icon: 'mdi:earth', text: 'Networking with global developers' },
                            { icon: 'mdi:code-braces', text: 'Confidence in reading and writing production code' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 bg-white/50 p-3 border border-black/20">
                                <Icon icon={item.icon} className="text-2xl flex-shrink-0" />
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* How to Build an Open Source Project */}
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={infoVariants}
                className="w-full flex justify-center px-4 mb-11">
                <div className="w-full md:w-9/12 bg-orange-50 p-6 md:p-11 border border-black">
                    <h2 className="text-3xl font-bold mb-6">How to Build an Open Source Project</h2>
                    
                    <div className="space-y-6">
                        {/* Step 1 */}
                        <div className="bg-white/50 p-4 border border-black/20">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                                <h3 className="text-xl font-semibold">Find a Real Problem</h3>
                            </div>
                            <p className="text-black/80 ml-11">Good OSS solves small but real pain points. Examples: attendance tracking, timetable issues, notes sharing.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white/50 p-4 border border-black/20">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                                <h3 className="text-xl font-semibold">Create a GitHub Repository</h3>
                            </div>
                            <div className="ml-11 text-black/80">
                                <p className="mb-2">Include a clear README.md with:</p>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>Project goal</li>
                                    <li>Tech stack</li>
                                    <li>How to run locally</li>
                                </ul>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white/50 p-4 border border-black/20">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                                <h3 className="text-xl font-semibold">Open Source Essentials</h3>
                            </div>
                            <div className="ml-11 flex flex-wrap gap-2">
                                {['LICENSE (MIT or Apache 2.0)', 'CONTRIBUTING.md', 'CODE_OF_CONDUCT.md', 'Issue templates'].map((item) => (
                                    <span key={item} className="bg-emerald-50 px-3 py-1 border border-black/30 text-sm">{item}</span>
                                ))}
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white/50 p-4 border border-black/20">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
                                <h3 className="text-xl font-semibold">Break Work into Issues</h3>
                            </div>
                            <div className="ml-11 flex flex-wrap gap-2">
                                {[
                                    { label: 'good first issue', color: 'bg-green-100 border-green-500' },
                                    { label: 'documentation', color: 'bg-blue-100 border-blue-500' },
                                    { label: 'bug', color: 'bg-red-100 border-red-500' },
                                    { label: 'feature', color: 'bg-purple-100 border-purple-500' }
                                ].map((item) => (
                                    <span key={item.label} className={`${item.color} px-3 py-1 border text-sm rounded-full`}>{item.label}</span>
                                ))}
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="bg-white/50 p-4 border border-black/20">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">5</span>
                                <h3 className="text-xl font-semibold">Contribution Flow</h3>
                            </div>
                            <div className="ml-11 grid grid-cols-2 md:grid-cols-4 gap-2">
                                {['Fork repo', 'Clone locally', 'Create branch', 'Make changes', 'Commit', 'Pull Request', 'Review', 'Merge'].map((step, idx) => (
                                    <div key={step} className="flex items-center gap-2 bg-emerald-50 p-2 border border-black/20 text-sm">
                                        <span className="text-emerald-600 font-bold">{idx + 1}.</span>
                                        <span>{step}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="ml-11 mt-3 text-sm text-black/70 italic">Teach this flow early.</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Why This Club Exists */}
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={infoVariants}
                className="w-full flex justify-center px-4 mb-11">
                <div className="w-full md:w-9/12 bg-emerald-50 p-6 md:p-11 border border-black">
                    <h2 className="text-3xl font-bold mb-4">Why This Club Exists</h2>
                    <p className="text-black/90 mb-6">The Open Source Club exists to bridge the gap between academic learning and real world development. While many students learn programming, few experience collaborative software development at scale.</p>
                    <p className="text-black/90 mb-4">This club helps members:</p>
                    <ul className="list-disc list-inside space-y-2 text-black/80">
                        <li>Understand how open source ecosystems work</li>
                        <li>Learn version control and contribution workflows</li>
                        <li>Build a public record of technical work</li>
                        <li>Develop teamwork and communication skills</li>
                        <li>Prepare for industry and research roles</li>
                    </ul>
                </div>
            </motion.div>

            {/* What We Do */}
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={infoVariants}
                className="w-full flex justify-center px-4 mb-11">
                <div className="w-full md:w-9/12 bg-emerald-50 p-6 md:p-11 border border-black">
                    <h2 className="text-3xl font-bold mb-4">What We Do</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { icon: 'mdi:source-repository', text: 'Build and maintain open source projects under Code Squad' },
                            { icon: 'mdi:github', text: 'Contribute to global open source repositories' },
                            { icon: 'mdi:git', text: 'Conduct Git and GitHub onboarding sessions' },
                            { icon: 'mdi:code-tags-check', text: 'Review pull requests and mentor contributors' },
                            { icon: 'mdi:account-group', text: 'Collaborate across other Code Squad clubs' },
                            { icon: 'mdi:check-decagram', text: 'Encourage responsible and consistent contributions' }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-white/50 p-3 border border-black/20">
                                <Icon icon={item.icon} className="text-2xl flex-shrink-0 mt-1" />
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Project Domains */}
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={infoVariants}
                className="w-full flex justify-center px-4 mb-11">
                <div className="w-full md:w-9/12 bg-emerald-50 p-6 md:p-11 border border-black">
                    <h2 className="text-3xl font-bold mb-4">Project Domains</h2>
                    <p className="text-black/90 mb-6">The Open Source Club collaborates with all other Code Squad clubs by providing open source project support. We help convert ideas from these clubs into structured, maintainable open source projects.</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        {projectDomains.map((domain) => (
                            <motion.div
                                variants={infoVariants}
                                key={domain.name}
                                className="flex flex-col gap-2 justify-center items-center bg-orange-50 w-24 h-24 min-w-24 min-h-24 md:w-28 md:h-28 p-3 border border-black"
                            >
                                <Icon icon={domain.icon} className="text-3xl md:text-5xl" />
                                <div className="text-xs text-center">{domain.name}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>


            {/* Project Ideas Section */}
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={infoVariants}
                className="w-full flex justify-center px-4 mb-11">
                <div className="w-full md:w-9/12 bg-orange-50 p-6 md:p-11 border border-black">
                    <h2 className="text-3xl font-bold mb-4">Project Ideas</h2>
                    <p className="text-black/90 mb-6">Explore open source project ideas across different domains. These projects are designed to provide real-world experience while solving meaningful problems. Click on any domain to see detailed project descriptions.</p>
                    <div className="space-y-4">
                        {projectIdeas.map((category, idx) => (
                            <div key={idx} className="border border-black bg-white/50">
                                <button
                                    onClick={() => setOpenDomain(openDomain === idx ? null : idx)}
                                    className="w-full flex justify-between items-center p-4 text-left font-semibold bg-emerald-50 hover:bg-emerald-100 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon icon={category.icon} className="text-2xl" />
                                        <span>{category.domain}</span>
                                        <span className="text-sm font-normal text-black/60">({category.projects.length} projects)</span>
                                    </div>
                                    <Icon 
                                        icon={openDomain === idx ? "mdi:chevron-up" : "mdi:chevron-down"} 
                                        className="text-2xl flex-shrink-0" 
                                    />
                                </button>
                                {openDomain === idx && (
                                    <div className="p-4 space-y-4">
                                        {category.projects.map((project, pIdx) => (
                                            <div key={pIdx} className="bg-white p-4 border border-black/20">
                                                <h4 className="font-bold text-lg mb-2">{pIdx + 1}. {project.name}</h4>
                                                <p className="text-black/80 mb-3">{project.description}</p>
                                                <p className="text-black/70 text-sm mb-3">{project.details}</p>
                                                <div className="flex items-start gap-2 bg-emerald-50 p-3 border-l-4 border-emerald-500">
                                                    <Icon icon="mdi:lightbulb" className="text-xl text-emerald-600 flex-shrink-0 mt-0.5" />
                                                    <p className="text-sm"><span className="font-semibold">Value:</span> {project.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* How to Participate */}
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={infoVariants}
                className="w-full flex justify-center px-4 mb-11">
                <div className="w-full md:w-9/12 bg-emerald-50 p-6 md:p-11 border border-black">
                    <h2 className="text-3xl font-bold mb-4">How to Participate</h2>
                    <ul className="space-y-3">
                        {[
                            'Join the Open Source Club as part of Code Squad',
                            'Contribute code, documentation, design, or testing',
                            'Participate in open source workshops',
                            'Become a project maintainer or mentor',
                            'Propose new open source projects'
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <Icon icon="mdi:check-circle" className="text-xl text-green-600 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-black/70 mt-6 text-sm border-t border-black/20 pt-4">No prior open source experience is required.</p>
                </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={infoVariants}
                className="w-full flex justify-center px-4 mb-11">
                <div className="w-full md:w-9/12 bg-emerald-50 p-6 md:p-11 border border-black">
                    <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqData.map((faq, idx) => (
                            <div key={idx} className="border border-black bg-white/50">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full flex justify-between items-center p-4 text-left font-medium"
                                >
                                    <span>{faq.q}</span>
                                    <Icon 
                                        icon={openFaq === idx ? "mdi:chevron-up" : "mdi:chevron-down"} 
                                        className="text-2xl flex-shrink-0" 
                                    />
                                </button>
                                {openFaq === idx && (
                                    <div className="px-4 pb-4 text-black/80">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    )
}
