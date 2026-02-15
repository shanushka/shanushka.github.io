function ProjectCard(props) {

    return (
        <div className="project-card-container" id="section-projects">
                            <div className="project-card-title">{props.project.title}</div>

            <div className="project-card-wrapper">
                <img src={props.project.imageUrl}/>
            </div>
            <div className="project-card-content">

                <button className="btn btn-primary" onClick={() => window.open(props.project.demoUrl, "_blank")}>Demo</button>
                <button className="btn btn-primary" onClick={() => window.open(props.project.githubUrl, "_blank")}>Github</button>

                <div>{props.project.technologies}</div>

            </div>
        </div>
    )

}

export default ProjectCard