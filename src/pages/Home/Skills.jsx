function Skill(props) {

    const keys = ['Frontend', 'Backend', 'Database', 'DevOps/OS' , 'AI Tools', 'Other' ]
    return (
        <div ref = {props.skillRef} className="page-column skills-section" id="section-skills">
            <div className="page-column-header">
                Skills            
            </div>
            <div className="skills-section-body">
            <div className="skill-block"> <div><img src="/Logo/cssLogo.svg"/><div className="flex">JS</div></div></div>
            <img src="/Logo/gitLogo.svg"/>
            <img src="/Logo/htmlLogo.svg"/>
            <img src="/Logo/javascriptLogo.svg"/>
            <img src="/Logo/typescriptLogo.svg"/>
            <img src="/Logo/reactLogo.svg"/>
            <img src="/Logo/pythonLogo.svg"/>
            <img src="/Logo/mysqlLogo.svg"/>
       
            </div>
            <div>
                {keys.map(key =>  {return (<div keys="key">{key} {props.skills[key]}</div>)})}
            </div>
        </div>
    )

}

export default Skill