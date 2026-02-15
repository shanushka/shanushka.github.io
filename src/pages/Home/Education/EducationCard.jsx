function EducationCard(props) {

    return (
        <div class="education-card">
            <div class="education-card-title">{props.education.title}</div>
            <div>{props.education.institution}</div>
            <div>{props.education.gpa}</div>
        </div>
    )

}

export default EducationCard