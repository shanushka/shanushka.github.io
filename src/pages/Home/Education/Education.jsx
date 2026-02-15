import './Education.css';
import EducationCard from './EducationCard';
import CertificationCard from './CertificationCard';

function Education(props) {

    return (
        <div ref = {props.educationRef} className="page-column education-section" id="section-education">
            <div className="page-column-header">
                Education
            </div>
            {props.education.map((edu) => {return <EducationCard education={edu}/>})}
            <div className="page-column-header">
                Certifications
                {props.certifications.map((certification) => {return <CertificationCard certification={certification}/>})}

            </div>
        </div>
    )

}

export default Education