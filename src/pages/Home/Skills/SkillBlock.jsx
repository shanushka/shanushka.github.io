import PropTypes from 'prop-types';

function SkillBlock({ title, logoUrl }) {
    return (
            <div className={`skill-block `}> 
                    <img className={`${title?.length > 0 ? 'skill-block-image': ''}`} src={logoUrl}/>
                    <div className="skill-block-title flex">{title}</div>
            </div>
    )
}

SkillBlock.propTypes = {
    title: PropTypes.string,
    logoUrl: PropTypes.string.isRequired
};

export default SkillBlock