import { Chrono } from "react-chrono";

function Experience(props) {
    const items = props.experience.map(exp => {
        const dateRange = exp.endDate
        ? `(${exp.startDate} - ${exp.endDate})`
        : "(Current)";
        return{
        cardTitle: exp.role,
        cardSubtitle: `${exp.company} ${dateRange}`,
        cardDetailedText: exp.description
    } })

    return (
        <div ref = {props.experienceRef} className="page-column experience-section" id="section-experience">
           <div className="page-column-header">
                Experience
            </div>
            <div className="experience-timeline-wrapper">
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
                    primary: "#1a1a1a",
                    cardBgColor: "#ffffff",
                    cardTitleColor: "#000000",
                    cardSubtitleColor: "#000000",
                    cardDetailsColor: "#000000",
                    titleColor: "#000000",
                    timelineBgColor: "#222222"
                    
                    
                }}
                disableToolbar={true} 
                mode="VERTICAL"
            />
            </div>
        </div>
    )

}

export default Experience