import { Chrono } from "react-chrono";

function Experience(props) {


    const items = props.experience.map(exp => {
        const dateRange = exp.endDate
        ? `(${exp.startDate} - ${exp.endDate})`
        : "(Current)";
        return{
        title: exp.role,
        cardTitle: exp.role,
        cardSubtitle: `${exp.company} ${dateRange}`,
        cardDetailedText: exp.description
    } })

    console.log("experience", props.experience)
    return (
        <div ref = {props.experienceRef} className="page-column experience-section" id="section-experience">
           <div className="page-column-header">
                Experience
            </div>
            <Chrono
                items={items}
                animation={{
                    slideshow: {
                      enabled: true,
                      duration: 3000,
                      type: 'fade'
                    }
                  }}
                theme={{
                    primary: '#1a1a1a',
                    cardBgColor: '#ffffff',
                    cardTitleColor: '#1a1a1a',
                    timelineBgColor: '#222222'
                    
                    
                }}
                disableToolbar={true} 
                mode="VERTICAL"
            />
        </div>
    )

}

export default Experience