import { motion } from "framer-motion";
import { useState } from "react";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Hero.css";
import cvPDF from "../assets/CV/my_cv.pdf";
import avatar from "../assets/images/avatar.png";

export default function Hero() {
  const { hero } = PortfolioContent;
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadCV = () => {
    setIsDownloading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = cvPDF;
      link.download = "Abhay_Javare_Gowda_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 800);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-badge"
            >
              <span className="badge-dot" />
              <span className="badge-text">{hero.badge}</span>
              <span className="badge-glow" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hero-title"
            >
              {hero.greeting} <span className="highlight">{hero.name}</span>
              <span className="title-cursor">|</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtitle"
            >
              I'm a {hero.title} who {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-actions"
            >
              <button
                className="btn-primary"
                onClick={handleDownloadCV}
                disabled={isDownloading}
              >
                <span className="btn-content">
                  {isDownloading ? (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="spinner"
                      >
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      {hero.buttons.primary}
                    </>
                  )}
                </span>
                <span className="btn-glow-effect" />
              </button>
              <button className="btn-secondary" onClick={scrollToProjects}>
                {hero.buttons.secondary}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-stats"
          >
            {hero.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-glow" />
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="tech-stack"
          >
            <p className="tech-label">
              <span className="tech-dot" />
              Tech Stack
            </p>
            <div className="tech-grid">
              {hero.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="tech-tag"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech}
                  <span className="tech-glow" />
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-right"
        >
          <div className="avatar-container">
            <img
              src={avatar}
              alt="Abhay Javare Gowda"
              className="avatar-static-img hero-portrait"
            />

            <div className="ring-dots" />
            <div className="ring-dots-outer" />

            <div className="particle-ring">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="dot" />
              ))}
            </div>

            <div className="avatar-glow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
