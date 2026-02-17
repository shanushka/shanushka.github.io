import './Education.css';
import EducationCard from './EducationCard';
import CertificationCard from './CertificationCard';

function Education(props) {

    return (
        <div ref = {props.educationRef} className="page-column education-section" id="section-education">
            <div className="page-column-header">
                Education
            </div>
            <div className="education-section-body">
                {props.education.map((edu) => {return <EducationCard education={edu}/>})}
            </div>
            <div className="page-column-header">
                Certifications
                </div>

                {props.certifications.map((certification) => {return <CertificationCard certification={certification}/>})}

        </div>
    )

}

export default Education