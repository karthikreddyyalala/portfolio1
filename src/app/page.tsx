import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { SplineKeyboard } from "@/components/SplineKeyboard";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";

// Portfolio data - Karthik's information from resume
const portfolioData = {
  name: "Karthik Reddy Yalala",
  title: "Computer Science Student & Software Engineer",
  description: "Computer Science student at Arizona State University (4.0 GPA) with strong foundations in software engineering, algorithms, and system design. I build scalable backend systems, RESTful APIs, and full-stack applications using modern technologies such as Node.js, Python, and PostgreSQL. Actively seeking Software Engineering internship opportunities to contribute to production-grade systems.",
  experience: "2+ Years Experience",
  location: "Tempe, Arizona",
  
  skills: [
    { name: "JavaScript", level: 95, category: "Programming Languages" },
    { name: "TypeScript", level: 90, category: "Programming Languages" },
    { name: "Python", level: 92, category: "Programming Languages" },
    { name: "Java", level: 85, category: "Programming Languages" },
    { name: "C/C++", level: 80, category: "Programming Languages" },
    { name: "HTML/CSS", level: 90, category: "Web Development" },
    { name: "React.js", level: 95, category: "Web Development" },
    { name: "Node.js", level: 88, category: "Web Development" },
    { name: "Express.js", level: 85, category: "Web Development" },
    { name: "REST APIs", level: 90, category: "Web Development" },
    { name: "TensorFlow", level: 85, category: "AI/ML" },
    { name: "Keras", level: 80, category: "AI/ML" },
    { name: "LangChain", level: 88, category: "AI/ML" },
    { name: "CrewAI", level: 85, category: "AI/ML" },
    { name: "PostgreSQL", level: 85, category: "Databases" },
    { name: "MongoDB", level: 80, category: "Databases" },
    { name: "MySQL", level: 75, category: "Databases" },
    { name: "AWS", level: 80, category: "Cloud & Tools" },
    { name: "Docker", level: 75, category: "Cloud & Tools" },
    { name: "Git", level: 90, category: "Cloud & Tools" },
    { name: "n8n", level: 70, category: "Cloud & Tools" },
  ],
  
  projects: [
    {
      title: "Career Digital Twin",
      description: "Built an AI Digital Twin that simulates interview prep and employer Q&A, helping users practice career conversations in real time. Deployed on Hugging Face Spaces and Vercel, enabling 20+ simulated interview sessions and reducing manual prep time by 50%.",
      technologies: ["LangChain", "Hugging Face Spaces", "Vercel", "OpenAI APIs", "React"],
      image: "/images/projects/career-twin.jpg",
      projectType: "career-twin",
      liveUrl: "https://huggingface.co/spaces/karthik/career-digital-twin",
      githubUrl: "https://github.com/karthikreddyyalala/Carrer-Digital-twin",
      featured: true,
    },
    {
      title: "Chatify",
      description: "Chatify is a full-stack, real-time communication application designed to deliver a seamless and engaging user experience similar to modern messaging platforms. Built with a robust Node.js and Express backend, it leverages Socket.io to enable instantaneous, bi-directional event-based communication. This project demonstrates the ability to architect and deploy a secure, scalable, and feature-rich web application from the ground up.",
      technologies: ["Node.js", "Express", "Socket.io", "Real-time Communication", "Full-stack"],
      image: "/images/projects/chatify.png",
      projectType: "chatify",
      featured: true,
    },
    {
      title: "Deep Research Agent Team",
      description: "Engineered a multi-agent research system that automated topic exploration, data retrieval, and synthesis, reducing manual research effort by 70%. Implemented planner-executor-reflector workflows with RAG, delivering faster, more accurate summaries than manual methods.",
      technologies: ["CrewAI", "LangGraph", "OpenAI APIs", "Pinecone", "Python"],
      image: "/images/projects/research-agent.jpg",
      projectType: "research-agent",
      liveUrl: "https://github.com/karthikreddyyalala/Deep-Research-Agent-Team-",
      githubUrl: "https://github.com/karthikreddyyalala/Deep-Research-Agent-Team-",
      featured: true,
    },
    {
      title: "Autonomous Trading Floor",
      description: "Simulated an autonomous trading floor with 4 collaborating agents (analyst, trader, risk manager, critic) to evaluate and execute stock decisions. Leveraged 6 MCP servers and 44 integrated tools, enabling real-time trade simulation and reducing decision latency by 35%.",
      technologies: ["MCP", "CrewAI", "Docker", "OpenAI APIs", "Python"],
      image: "/images/projects/trading-floor.jpg",
      projectType: "trading-floor",
      liveUrl: "https://github.com/karthikreddyyalala/Autonomous-Trading-Floor",
      githubUrl: "https://github.com/karthikreddyyalala/Autonomous-Trading-Floor",
      featured: true,
    },
    {
      title: "Stock Price Predictor",
      description: "Developed an LSTM-based deep learning model for stock forecasting, improving prediction accuracy by 12% over baseline linear models. Applied normalization, windowing, and hyperparameter tuning, with Matplotlib visualizations to evaluate performance on 50k+ data points.",
      technologies: ["Python", "Keras", "TensorFlow", "Pandas", "Matplotlib"],
      image: "/images/projects/stock-predictor.jpg",
      projectType: "stock-predictor",
      liveUrl: "https://github.com/karthikreddyyalala/Stock-Price-Predictor",
      githubUrl: "https://github.com/karthikreddyyalala/Stock-Price-Predictor",
      featured: false,
    },
    {
      title: "LeetCode Tracker",
      description: "A personal LeetCode progress tracker to log solved problems, filter by difficulty and topic, and visualize consistency over time. Built to stay accountable and spot weak areas fast.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/images/projects/leetcode-tracker.jpg",
      projectType: "leetcode-tracker",
      githubUrl: "https://github.com/karthikreddyyalala/Leetcode-tracker",
      featured: false,
    },
  ],
  
  experiences: [
    {
      title: "Data Analyst Intern",
      company: "Food Forest AI",
      location: "Philadelphia, PA",
      startDate: "May 2025",
      endDate: "July 2025",
      description: [
        "Cleaned, validated, and enriched 200+ company records by verifying contact, geographic, and web presence data using manual research and GPT-powered tools",
        "Extracted structured insights from websites and HTML pages to categorize product offerings, services, capabilities, and certifications, improving dataset quality by 40%",
        "Streamlined data deduplication and anomaly flagging using Google Sheets automation, ensuring high-quality integration into an AI-driven B2B search platform",
      ],
      technologies: ["Python", "GPT", "Google Sheets", "Data Analysis", "Web Scraping"],
    },
    {
      title: "Software Engineer Intern",
      company: "YJR Realtors",
      location: "Hyderabad, India",
      startDate: "May 2024",
      endDate: "July 2024",
      description: [
        "Built a responsive customer interface and integrated AI-powered chat agents to handle property inquiries, reducing manual staff responses",
        "Developed an email automation agent using Excel + SendGrid API to send personalized client emails in one click, saving hours of repetitive work weekly",
        "Designed an internal lead management dashboard to track customer requests and automate follow-ups, improving response time by 40%",
      ],
      technologies: ["React", "AI Chat Agents", "SendGrid API", "Excel", "Dashboard Development"],
    },
  ],
  
  education: [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Arizona State University",
      location: "Tempe, Arizona",
      year: "May 2027",
      description: "GPA: 4.0 | Dean's List: Fall 2023, Spring 2024, Fall 2024, Spring 2025. Relevant Coursework: Algorithms, Data Structures, Object-Oriented Programming, Operating Systems, Software Engineering, Cybersecurity, Artificial Intelligence, Machine Learning, Web Development, Discrete Mathematics.",
    },
  ],

  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      badgeImage: "/images/certifications/aws-certified-cloud-practitioner.png",
      year: "2025",
    },
  ],

  contactInfo: {
    email: "karthikreddyy386@gmail.com",
    phone: "+1 (623) 888-4033",
    location: "Tempe, Arizona",
    linkedin: "https://linkedin.com/in/kyalala/",
    github: "https://github.com/karthikreddyyalala",
    twitter: "https://twitter.com/karthikreddyy",
  },
};

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-[#030303]">
      {/* Skip to main content — keyboard/screen reader accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Navigation name={portfolioData.name} />

      <main id="main-content">
        <section id="home">
          <HeroGeometric
            badge="Portfolio"
            title1="Hello, I'm"
            title2="Karthik"
            showPhoto={true}
          />
        </section>

        <section id="about">
          <About
            name={portfolioData.name}
            title={portfolioData.title}
            description={portfolioData.description}
            experience={portfolioData.experience}
            location={portfolioData.location}
          />
        </section>

        <section id="skills" className="bg-[#030303]">
          <SplineKeyboard />
        </section>

        <section id="certifications">
          <Certifications certifications={portfolioData.certifications} />
        </section>

        <section id="projects">
          <Projects projects={portfolioData.projects} />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact contactInfo={portfolioData.contactInfo} />
        </section>
      </main>

      <footer className="border-t border-white/[0.06] bg-[#030303] py-8 text-center">
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Karthik Reddy Yalala. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
