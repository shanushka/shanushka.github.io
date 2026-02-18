import SkillBlock from "./SkillBlock";
import SkillSection from "./SkillSection";

import './Skills.css';

function Skill(props) {

    const keys = ['Frontend', 'Backend', 'Database', 'DevOps/OS' , 'AI Tools', 'Other' ]
    return (
        <div ref = {props.skillRef} className="page-column skills-section" id="section-skills">
            <div className="page-column-header">
                Skills     
       
            </div>
            <div className="skills-section-body">
                <SkillSection title="Frontend">
                    <SkillBlock logoUrl="/Logo/javascript.png"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/bootstrap.png"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/reactLogo.svg" title="React"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/typescriptLogo.svg" title="Typescript"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/cssLogo.svg" title="CSS"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/angular.png" title="Angular"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/blazor.png" title="Blazor"></SkillBlock>
                </SkillSection>
                <SkillSection title="Backend">
                    <SkillBlock logoUrl="/Logo/nodejs.png"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/pythonLogo.svg" title="Python"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/flask.png" title="Flask"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/go.png" title="GoLang"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/net.png"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/django.png" title="Django"></SkillBlock>
                </SkillSection>
                <SkillSection title="Database">
                    <SkillBlock logoUrl="/Logo/mysql.png"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/postgres.png"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/mongodb.png"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/redis.png"></SkillBlock>
                </SkillSection>
                <SkillSection title="Cloud & Tools">
                    <SkillBlock logoUrl="/Logo/gitLogo.svg" title="Git"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/docker.png"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/jira.png" title="Jira"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/figma.png" title="Figma"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/aws.png"></SkillBlock>
                    <SkillBlock logoUrl="/Logo/azure.png" title="Azure"></SkillBlock>
                </SkillSection>
            </div>
        </div>
    )

}

export default Skill