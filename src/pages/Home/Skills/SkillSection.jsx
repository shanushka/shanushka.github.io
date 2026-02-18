import PropTypes from 'prop-types';

function SkillSection({ title, children }) {
    return (
        <div className="skills-column-section-wrapper">
        <img className="skills-ivy-plant" src="/ivy-plant.png"></img>
            <div className="skills-column-section-title">{title}</div>
            <div className="skills-column-section">
            {children}

            </div>
        </div>
    )
}

SkillSection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default SkillSection