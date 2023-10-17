function Skill({skill,percentage}) {

    const percentages = {
        70: 'seventy',
        75: 'seventy-five',
        90: 'ninety'
    }

    const skillLevelClass = "skill-level " + (percentages[percentage]);

    
    return (
        <div className="skill-container">
            <span className="skill-title">{skill}</span>
            <div className="skill-level-container">
                <div className={skillLevelClass}></div>
            </div>
        </div>
    )
}

export default Skill;