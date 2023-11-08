function Skill({skill,percentage}) {

    const percentages = {
        70: 'seventy',
        50: 'fifty',
        65: 'sixty-five'
    }

    const skillLevelClass = "skill-level " + (percentages[percentage]);

    return (
        <div className="skill-container">
            <h3 className="skill-title">{skill}</h3>
            <div className="skill-level-container">
                <div className={skillLevelClass}></div>
            </div>
        </div>
    )
}

export default Skill;