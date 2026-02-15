import ProjectCard from "./ProjectCard"

import './Projects.css'
function Project(props) {

    return (
        <div ref = {props.projectRef} className="page-column projects-section" id="section-projects">
            <div className="projects-section-header">
                Personal Projects
            </div>
            <div className="projects-section-body-container">
                <div className="projects-section-body">
                    {props.projects.map((project) => <ProjectCard project={project}></ProjectCard>)}
                </div>
            </div>
        </div>
    )

}

export default Project