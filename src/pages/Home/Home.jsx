import { useRef, useState, useEffect } from "react";
import image from "../../assets/anushka.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faEye,faDownload } from "@fortawesome/free-solid-svg-icons";

import Button from "../../components/Button";
import Skill from "./Skills";
import Projects from "../Projects";
import Experience from "./Experience";
import Education from "./Education";
import  {getResume} from "../../services/resume";

function Home() {
  const skillRef = useRef(null);
  const resume = getResume();

  console.log("resume", resume )

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
  const prefix = "Hello World, I'm ";
  const name = "ANUSHKA SHRESTHA";

  const [typedPrefix, setTypedPrefix] = useState("");
  const [typedName, setTypedName] = useState("");

  const downloadResume = (name) =>
  {
    var link = document.createElement("a");
    link.download = name;
    link.href = "/Resume.pdf";
    link.click();
  }

  useEffect(() => {
    let i = 0;
    let j = 0;
    const speed = 40;

    const interval = setInterval(() => {
      if (i < prefix.length) {
        setTypedPrefix(prefix.slice(0, i + 1));
        i++;
      } else if (j < name.length) {
        setTypedName(name.slice(0, j + 1));
        j++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="portfolio-main-body">
        <div className="portfolio-main-body-left card">
        <div class="corner top left"></div>
        <div class="corner bottom left"></div>

          <div className="portfolio-main-body-left-content">
            <div className="portfolio-header">
                {typedPrefix}
                <span className="portfolio-name">{typedName}</span>
                <span className="caret" />
              </div>
                <div className="portfolio-sub-header bold">Full Stack Developer</div>
            <p>
              Six years of experience building web applications using React,
              TypeScript, .NET, Python, NodeJS, SQL and cloud-native systems. Experienced in delivering end
              to end features: from UI/UX prototyping to backend REST APIs, authentication, real-time dashboards,
              and cloud deployment. Focused on building simple and intuitive features for complicated problems that
              make a better experience for the user.
            </p>
            <div className="home-btn-wrapper">
              <Button iconType={faEye} type="primary" handleClick={() => {  window.open("/Resume.pdf", "_blank");}} title="Preview Resume"></Button>
              <Button iconType={faDownload} type="primary" handleClick={() => {downloadResume("Resume_Anushka_Shrestha")}} title="Download Resume"></Button>
            </div>

            <div class="home-contact-wrapper">
            <a href="https://github.com/shanushka" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{ color: "#24292e" }} size="2xl" />
            </a>
            <a href="https://www.linkedin.com/in/anushka--shrestha/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: "#0077b5" }} />
            </a>
            <a href="https://medium.com/@anushkashrestha24" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faMedium} size="2xl" style={{ color: "#000000" }} />
            </a>
          </div>
          </div>
         
          <div className="portfolio-block">
            <div
              onClick={(e) => startTransition(skillRef, "skills", e)}
              className={`box portfolio-skills ${
                spinning.id === "skills" ? `spinning-zoom ${spinning.phase}` : ""
              }`}
            >
              <img className="thumbpin" src="/Logo/thumb-tack.png"/>
              <div className="box-content">Skills</div>
            </div>

            <div
              onClick={(e) => startTransition(experienceRef, "experience", e)}
              className={`box portfolio-experience ${
                spinning.id === "experience" ? `spinning-zoom ${spinning.phase}` : ""
              }`}
            >
              <img className="thumbpin" src="/Logo/thumb-tack.png"/>
              <div className="box-content">Experience</div>
            </div>

            <div
              onClick={(e) => startTransition(projectRef, "project", e)}
              className={`box portfolio-projects ${
                spinning.id === "project" ? `spinning-zoom ${spinning.phase}` : ""
              }`}
            >
              <img className="thumbpin" src="/Logo/thumb-tack.png"/>
              <div className="box-content">Projects</div>
            </div>
            <div
              onClick={(e) => startTransition(educationRef, "education", e)}
              className={`box portfolio-education ${
                spinning.id === "education" ? `spinning-zoom ${spinning.phase}` : ""
              }`}
            >
              <img className="thumbpin" src="/Logo/thumb-tack.png"/>
              <div className="box-content">Education</div>
            </div>
          </div>
        </div>

        <div className="portfolio-main-body-right">
          <img src={image} alt="Portfolio" />
        </div>
      </div>

      <Skill skills={resume.skills_interests} skillRef={skillRef} />
      <Experience experience={resume.experience}  experienceRef={experienceRef} />
      <Projects projectRef={projectRef} projects={resume.projects}/>
      <Education certifications = {resume.certifications} education={resume.education} educationRef={educationRef} />
    </div>
  );
}

export default Home;
