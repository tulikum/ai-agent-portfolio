
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  ArrowRight,
  Bot,
  Mic,
  Layers,
  Workflow,
  ShieldCheck,
  Code2,
  Box,
  Users,
  ExternalLink,
  Mail
} from "lucide-react";
import "./App.css";

const agents = [
  {
    name: "Voice AI Agent",
    description:
      "Real-time conversational AI with speech-to-text, LLM reasoning, and text-to-speech.",
    technologies: ["LiveKit", "FastAPI", "Gemini"],
    icon: Mic,
    status: "Coming Soon",
    github: "",
    demo: "",
  },
  {
    name: "Knowledge Assistant",
    description:
      "RAG-based assistant for searching documents, policies, and business knowledge with citations.",
    technologies: ["LangChain", "Vector DB", "FastAPI"],
    icon: Layers,
    status: "Coming Soon",
    github: "",
    demo: "",
  },
  {
    name: "Workflow Automation Agent",
    description:
      "Autonomous multi-agent workflows using LangGraph for complex business processes.",
    technologies: ["LangGraph", "Python", "Automation"],
    icon: Workflow,
    status: "Coming Soon",
    github: "",
    demo: "",
  },
  {
    name: "AI Evaluation Agent",
    description:
      "Evaluate LLM outputs using quality checks, hallucination detection, and safety validation.",
    technologies: ["RAGAS", "Evaluation", "Safety"],
    icon: ShieldCheck,
    status: "Coming Soon",
    github: "",
    demo: "",
  },
];

const githubProfile = "https://github.com/tulikum";
const linkedinProfile = "https://www.linkedin.com/in/tulikumari/";
const phoneNumber = "+919958104481";
const whatsappLink = `https://wa.me/919958104481`;

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="brand">
          <div className="brand-logo">
            T<span>K</span>
          </div>
          <div className="brand-info">
            <strong>Tuli Kumari</strong>
            <span>AI Solutions Architect</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#agents">AI Agents</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href={githubProfile}
          className="github-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={19} />
          GitHub
          <ExternalLink size={14} />
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">AI AGENT PORTFOLIO</p>

            <h1>
              AI Agents &amp;
              <br />
              Intelligent <span>Solutions</span>
            </h1>

            <p className="hero-description">
              A portfolio of intelligent AI agents for
              automation, knowledge access, conversational
              AI, and real-world business applications.
            </p>

            <div className="hero-actions">
              <a href="#agents" className="primary-button">
                <Bot size={19} />
                Explore AI Agents
                <ArrowRight size={18} />
              </a>

              <a
                href={githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button"
              >
                <FaGithub size={19} />
                View on GitHub
              </a>
            </div>
          </div>

          {/* Electric Blue AI Visual */}
          <div className="hero-visual">
            <div className="wave wave-one" />
            <div className="wave wave-two" />
            <div className="wave wave-three" />

            <div className="ai-chip">
              <div className="chip-inner">AI</div>
            </div>

            <div className="visual-glow" />
          </div>
        </section>

        {/* Portfolio Highlights */}
        <section className="stats-section">
          <div className="stat-item">
            <Layers size={31} />
            <div>
              <strong>AI Agents</strong>
              <span>Voice · RAG · Automation</span>
            </div>
          </div>

          <div className="stat-item">
            <Code2 size={31} />
            <div>
              <strong>Projects</strong>
              <span>AI & Full-Stack Development</span>
            </div>
          </div>

          <div className="stat-item">
            <Box size={31} />
            <div>
              <strong>Technologies</strong>
              <span>Python · React · LangGraph</span>
            </div>
          </div>

          <div className="stat-item">
            <Users size={31} />
            <div>
              <strong>End-to-End</strong>
              <span>Design · Develop · Deploy</span>
            </div>
          </div>
        </section>

        {/* Featured Agents */}
        <section id="agents" className="agents-section">
          <div className="section-heading">
            <span className="section-label">EXPLORE MY WORK</span>
            <h2>Featured AI Agents</h2>
            <p>
              Intelligent solutions designed for
              real-world business problems.
            </p>
          </div>

          <div className="agents-grid">
            {agents.map((agent) => {
              const Icon = agent.icon;

              return (
                <article className="agent-card" key={agent.name}>
                  <div className="agent-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{agent.name}</h3>
                  <p className="agent-description">
                    {agent.description}
                  </p>

                  <div className="tech-tags">
                    {agent.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="agent-footer">
                    {agent.demo ? (
                      <a
                        href={agent.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Try Demo <ArrowRight size={16} />
                      </a>
                    ) : agent.github ? (
                      <a
                        href={agent.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code <ArrowRight size={16} />
                      </a>
                    ) : (
                      <span className="coming-soon">
                        {agent.status}
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="content-section">
          <div className="section-heading">
            <span className="section-label">MY PROJECTS</span>
            <h2>Projects & Experiments</h2>
            <p>
              Explore AI applications, technical experiments,
              and open-source work.
            </p>
          </div>

          <div className="empty-projects">
            <Code2 size={32} />
            <h3>More projects coming soon</h3>
            <p>
              New projects and technical demonstrations
              will be added here.
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="about-section">
          <div className="about-content">
            <span className="section-label">ABOUT ME</span>
            <h2>Hi, I'm Tuli Kumari.</h2>
            <h3>AI Solutions Architect & Developer</h3>

            <p>
              I specialize in building AI-powered applications,
              intelligent agents, RAG systems, voice AI solutions,
              and scalable full-stack applications.
            </p>

            <p>
              My work focuses on combining modern AI models
              with reliable backend services, intuitive user
              interfaces, and practical business automation.
            </p>

            <div className="skills">
              {[
                "Python",
                "FastAPI",
                "React",
                "TypeScript",
                "LangGraph",
                "LangChain",
                "RAG",
                "Voice AI",
                "Docker",
                "AWS",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact-section">
          <span className="section-label">LET'S CONNECT</span>
          <h2>Let's Build Something Intelligent</h2>
          <p>
            Open to AI development projects, consulting,
            and remote collaboration opportunities.
          </p>

          <div className="contact-actions">
            <a href={`tel:${phoneNumber}`} className="secondary-button">
              Call: +91 9958104481
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Contact on WhatsApp
            </a>
            <a
              href={linkedinProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              <FaLinkedin size={19} />
              Connect on LinkedIn
            </a>

            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              <FaGithub size={19} />
              GitHub Profile
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Tuli Kumari</span>
        <span>AI Agents & Intelligent Solutions</span>
        <Mail size={17} />
      </footer>
    </div>
  );
}

export default App;
