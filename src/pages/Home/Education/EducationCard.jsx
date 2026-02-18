
function EducationCard(props) {

    return (
        <div className="education-card">
            <div className="education-card-title">{props.education.title}</div>
            <div className="education-card-subtitle">{props.education.institution}</div>
            <div>{props.education.location}</div>

            <div>GPA: {props.education.gpa}</div>
        </div>
    )

}

export default EducationCard