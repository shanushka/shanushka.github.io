import { useRef, useState } from "react";
import image from "../../assets/anushka-portfolio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";

import Skill from "./Skills";
import Project from "./Projects";
import Experience from "./Experience";
import Education from "./Education";

function Home() {
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  const [spinning, setSpinning] = useState({ id: null, phase: null });

  const startTransition = (ref, id, e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // Start position (clicked box in viewport coords)
    document.documentElement.style.setProperty("--from-left", `${rect.left}px`);
    document.documentElement.style.setProperty("--from-top", `${rect.top}px`);
    document.documentElement.style.setProperty("--from-width", `${rect.width}px`);
    document.documentElement.style.setProperty("--from-height", `${rect.height}px`);

    // Prevent user from seeing background scroll
    document.body.style.overflow = "hidden";

    // OPEN (zoom + rotate to fullscreen)
    setSpinning({ id, phase: "opening" });

    // After open finishes, scroll instantly behind overlay, then CLOSE (tuck to top of viewport)
    setTimeout(() => {
      const y = ref.current?.getBoundingClientRect().top + window.scrollY || 0;
      window.scrollTo({ top: y, behavior: "auto" });

      // "Zoom out" to top-of-viewport banner (not to element position)
      const headerHeight = 140; // tweak
      document.documentElement.style.setProperty("--to-left", `0px`);
      document.documentElement.style.setProperty("--to-top", `0px`);
      document.documentElement.style.setProperty("--to-width", `100vw`);
      document.documentElement.style.setProperty("--to-height", `${headerHeight}px`);

      setSpinning({ id, phase: "closing" });

      // Cleanup after close
      setTimeout(() => {
        setSpinning({ id: null, phase: null });
        document.body.style.overflow = "";
      }, 650);
    }, 900); // must match open animation duration
  };

  return (
    <div className="App">
      <div className="portfolio-main-body">
        <div className="portfolio-main-body-left">
          <div>
            <h1>Hi, this is Anushka Shrestha</h1>
            <h2>Full Stack Software developer</h2>
            <p>
              Six years of experience building web applications using React,
              TypeScript, .NET, Python, NodeJS, SQL and cloud-native systems. Experienced in delivering end
              to end features: from UI/UX prototyping to backend REST APIs, authentication, real-time dashboards,
              and cloud deployment. Focused on building simple and intuitive features for complicated problems that
              make a better experience for the user.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a href="https://github.com/shanushka" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{ color: "#24292e" }} size="2xl" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: "#0077b5" }} />
            </a>
            <a href="https://medium.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faMedium} size="2xl" style={{ color: "#000000" }} />
            </a>
          </div>
          <div className="portfolio-block">
            <div
              onClick={(e) => startTransition(skillRef, "skills", e)}
              className={`box portfolio-skills ${
                spinning.id === "skills" ? `spinning-zoom ${spinning.phase}` : ""
              }`}
            >
              <div className="box-content">Skills</div>
            </div>

            <div
              onClick={(e) => startTransition(experienceRef, "experience", e)}
              className={`box portfolio-experience ${
                spinning.id === "experience" ? `spinning-zoom ${spinning.phase}` : ""
              }`}
            >
              <div className="box-content">Experience</div>
            </div>

            <div
              onClick={(e) => startTransition(projectRef, "project", e)}
              className={`box portfolio-projects ${
                spinning.id === "project" ? `spinning-zoom ${spinning.phase}` : ""
              }`}
            >
              <div className="box-content">Projects</div>
            </div>

            <div
              onClick={(e) => startTransition(educationRef, "education", e)}
              className={`box portfolio-education ${
                spinning.id === "education" ? `spinning-zoom ${spinning.phase}` : ""
              }`}
            >
              <div className="box-content">Education</div>
            </div>
          </div>
        </div>

        <div className="portfolio-main-body-right">
          <img src={image} alt="Portfolio" />
        </div>
      </div>

      <Skill skillRef={skillRef} />
      <Experience experienceRef={experienceRef} />
      <Project projectRef={projectRef} />
      <Education educationRef={educationRef} />
    </div>
  );
}

export default Home;
