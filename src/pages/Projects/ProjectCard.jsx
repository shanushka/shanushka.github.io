function ProjectCard(props) {

    return (
        <div className="project-card-container" id="section-projects" onClick={() => window.open(props.project.demoUrl, "_blank")} >

            <div className="project-card-wrapper">
                <img src={props.project.imageUrl}/>
            </div>
            <div className="project-card-content">
            <div className="project-card-title">{props.project.title}</div>
                <div className="project-card-btn-content">
                    <button className="btn btn-primary" onClick={() => window.open(props.project.githubUrl, "_blank")}>Github</button>
                </div>
                <div>{props.project.technologies.map(technology =>  {return <span style={{marginLeft:6}}>{technology},</span>} )}</div>

            </div>
        </div>
    )

}

export default ProjectCard