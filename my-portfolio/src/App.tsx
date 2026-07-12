import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [status, setStatus] = useState(""); 
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setStatus("Sending...");

  try {
    const response = await fetch("https://formspree.io/f/mzdnpjrd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully ✅");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus("Message send nahi hua ❌");
    }
  } catch (error) {
    setStatus("Something went wrong ❌");
  } finally {
    setLoading(false);
  }
};
  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "CSS / Tailwind", level: 88 },
    { name: "Python", level: 75 },
    { name: "MongoDB", level: 70 },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack shopping platform with cart, payment integration and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      link: "#",
    },
    {
      title: "Chat Application",
      description:
        "Real-time messaging app with group chats, file sharing and video calls.",
      tags: ["React", "Socket.io", "Express", "WebRTC"],
      image: "💬",
      link: "#",
    },
    {
      title: "Portfolio Generator",
      description:
        "Drag-and-drop portfolio builder with custom themes and animations.",
      tags: ["TypeScript", "React", "Framer Motion"],
      image: "🎨",
      link: "#",
    },
    {
      title: "Task Manager Pro",
      description:
        "Kanban-style project management tool with team collaboration features.",
      tags: ["React", "Firebase", "Redux"],
      image: "📋",
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather app with 7-day forecast, maps and location search.",
      tags: ["React", "API", "Chart.js"],
      image: "🌤️",
      link: "#",
    },
    {
      title: "AI Image Generator",
      description:
        "Text-to-image generation tool powered by AI with style customization.",
      tags: ["Python", "React", "OpenAI"],
      image: "🤖",
      link: "#",
    },
  ];

  const experiences = [
    {
      year: "2023 - Present",
      role: "Senior Frontend Developer",
      company: "Tech Corp",
      description: "Leading the frontend team, building scalable React apps.",
    },
    {
      year: "2021 - 2023",
      role: "Full Stack Developer",
      company: "StartupXYZ",
      description:
        "Developed complete web solutions from design to deployment.",
    },
    {
      year: "2020 - 2021",
      role: "Junior Developer",
      company: "CodeFactory",
      description: "Started my journey building responsive websites and APIs.",
    },
  ];

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio">
      {/* ========== NAVBAR ========== */}
      <nav className="navbar">
        <div className="nav-container">
          <a className="logo" href="#home" onClick={() => handleNavClick("home")}>
            <span className="logo-bracket">&lt;</span>
            Dev
            <span className="logo-dot">.</span>
            Portfolio
            <span className="logo-bracket">/&gt;</span>
          </a>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            {["home", "about", "skills", "projects", "experience", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`nav-link ${activeSection === item ? "active" : ""}`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              )
            )}
          </div>

          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section id="home" className="hero">
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}></div>
          ))}
        </div>

        <div className="hero-content">
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-name">
            <span className="gradient-text">MUHAMMAD QASIM</span>
          </h1>
          <div className="hero-title-wrapper">
            <h2 className="hero-title">Full Stack Developer</h2>
            <div className="typing-cursor"></div>
          </div>
          <p className="hero-description">
            I craft beautiful, performant web applications with modern
            technologies. Passionate about clean code, great UX and turning
            ideas into reality.
          </p>
          <div className="hero-buttons">
  <a href="#projects" className="btn btn-primary">View My Work</a>
  {/* Naya WhatsApp Button */}
  <a href="https://wa.me/923258733968" target="_blank" className="btn btn-outline" style={{borderColor: '#25D366', color: '#25D366'}}>
    WhatsApp Me
  </a>
</div>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={() => handleNavClick("projects")}>
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline" onClick={() => handleNavClick("contact")}>
              Get In Touch
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Clients</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="avatar-ring">
            <div className="avatar">
  <img src="/my-photo.jpg" alt="Muhammad Qasim" className="avatar-img" />
</div>
          </div>
          <div className="floating-badge badge-1">⚛️ React</div>
          <div className="floating-badge badge-2">🟦 TypeScript</div>
          <div className="floating-badge badge-3">🟢 Node.js</div>
        </div>

        <a href="#about" className="scroll-indicator" onClick={() => handleNavClick("about")}>
          <span className="scroll-text">Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </a>
      </section>
{/* ========== PHOTO SHOWCASE ========== */}
<section id="showcase" className="showcase">
  <div className="section-container">
    <h2 className="section-title">
      Know <span className="gradient-text">Me Better</span>
    </h2>
    <div className="section-line"></div>

    <div className="showcase-grid">
      {/* Main Photo Card */}
      <div className="showcase-main">
        <div className="showcase-img-wrapper">
          <img
            src="/my-photo.jpg"
            alt="Muhammad Qasim"
            className="showcase-img"
          />
          <div className="showcase-img-border"></div>
        </div>

        <div className="showcase-name-card">
          <h3>Muhammad Qasim</h3>
          <p>Full Stack Developer</p>
          <div className="showcase-status">
            <span className="status-dot"></span>
            Available for Freelance
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="showcase-cards">
        <div className="info-card">
          <div className="info-card-icon">🎯</div>
          <div className="info-card-content">
            <h4>Mission</h4>
            <p>Building digital experiences that make a difference</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-icon">💡</div>
          <div className="info-card-content">
            <h4>Vision</h4>
            <p>Making technology accessible and beautiful for everyone</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-icon">🚀</div>
          <div className="info-card-content">
            <h4>Goal</h4>
            <p>Become a world-class developer and help others grow</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-card-icon">❤️</div>
          <div className="info-card-content">
            <h4>Passion</h4>
            <p>Clean code, great design and solving real problems</p>
          </div>
        </div>

        <div className="showcase-quote">
          <span className="quote-mark">"</span>
          <p>Code is like humor. When you have to explain it, it's bad.</p>
          <span className="quote-author">— Cory House</span>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* ========== ABOUT ========== */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-line"></div>

          <div className="about-grid">
            <div className="about-image-wrapper">
              <div className="about-image">
                <img src="/my-photo.jpg" alt="Muhammad Qasim" className="about-photo" />
              </div>
              <div className="about-image-bg"></div>
            </div>

            <div className="about-content">
              <h3>A passionate developer who loves building things</h3>
              <p>
                I'm a Full Stack Developer with 3+ years of experience in
                building web applications. I specialize in React, TypeScript,
                Node.js and modern web technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source, or sharing knowledge through blog
                posts and mentoring.
              </p>

              <div className="about-info">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <span>Pakistan</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">🎓</span>
                  <span>CS Graduate</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">💼</span>
                  <span>Open to Work</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">🌐</span>
                  <span>Remote Friendly</span>
                </div>
              </div>

              <a href="#contact" className="btn btn-primary" onClick={() => handleNavClick("contact")}>
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SKILLS ========== */}
      <section id="skills" className="skills">
        <div className="section-container">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-line"></div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="tools-section">
            <h3>Tools & Technologies</h3>
            <div className="tools-grid">
              {["VS Code", "Git", "Docker", "Figma", "Postman", "Linux", "AWS", "Vercel"].map(
                (tool, i) => (
                  <span key={i} className="tool-tag">
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROJECTS ========== */}
      <section id="projects" className="projects">
        <div className="section-container">
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-line"></div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                  <div className="project-overlay">
                    <a href={project.link} className="project-link">
                      View Project →
                    </a>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EXPERIENCE ========== */}
      <section id="experience" className="experience">
        <div className="section-container">
          <h2 className="section-title">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="section-line"></div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <span className="timeline-year">{exp.year}</span>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-line"></div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>buttofofbuttofof@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <h4>Phone</h4>
                    <p>+92 3258733968</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Location</h4>
                    <p>Pakistan</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-item">
  <span className="contact-icon">💬</span>
  <div>
    <h4>WhatsApp</h4>
    <a 
      href="https://wa.me/923258733968?text=Hello%20Qasim,%20I%20saw%20your%20portfolio..." 
      target="_blank" 
      rel="noreferrer"
      style={{color: "var(--primary)", textDecoration: "none", fontWeight: "bold"}}
    >
      Chat on WhatsApp →
    </a>
  </div>
</div>
<div className="social-links">
  <a href="https://github.com/yourusername" target="_blank" className="social-link">GitHub</a>
  <a href="https://linkedin.com/in/yourusername" target="_blank" className="social-link">LinkedIn</a>
  <a href="https://twitter.com/yourusername" target="_blank" className="social-link">Twitter</a>
  <a href="https://instagram.com/yourusername" target="_blank" className="social-link">Instagram</a>
</div>
<a href="https://t.me/yourtelegramusername" target="_blank" className="social-link">Telegram</a>
  <div className="form-group">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={formData.name}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-group">
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-group">
    <input
      type="text"
      name="subject"
      placeholder="Subject"
      value={formData.subject}
      onChange={handleChange}
      required
    />
  </div>

  <div className="form-group">
    <textarea
      name="message"
      placeholder="Your Message"
      rows={5}
      value={formData.message}
      onChange={handleChange}
      required
    ></textarea>
  </div>

  <button
    type="submit"
    className="btn btn-primary btn-full"
    disabled={loading}
      >
        {loading ? "Sending..." : "🚀 Send Message"}
  </button>

  {status && <p className="form-status">{status}</p>}
</form>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="footer-content">
          <a className="footer-logo" href="#home">
            <span className="logo-bracket">&lt;</span>
            Dev
            <span className="logo-dot">.</span>
            Portfolio
            <span className="logo-bracket">/&gt;</span>
          </a>
          <p>Built with ❤️ and React + TypeScript</p>
          <p className="copyright">© 2024 All Rights Reserved</p>
        </div>
      </footer>
      <a 
  href="https://wa.me/923258733968" 
  className="floating-whatsapp" 
  target="_blank" 
  rel="noreferrer"
>
  <span style={{fontSize: '30px'}}>💬</span>
</a>
    </div>
  );
};

export default App;