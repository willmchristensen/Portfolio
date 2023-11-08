import './SkillDropDown.css'
import Skill from "./Skill"
import { useState } from 'react';

function SkillDropDown({ skill }) {

    const titles = Object.keys(skill.skills);
    const percentages = Object.values(skill.skills);
    const [isOpen, setIsOpen] = useState(false);
    const dropDownSkillsClass = `dropdown-skills${isOpen ? "-open" : ''}`;
    const toggleDropDown = () => setIsOpen(!isOpen);    
    return (
        <div className="dropdown-container">
            <div className="dropdown-title-container">
                <div className="dropdown-title-icon">
                    {skill.icon}
                </div>
                <div className="dropdown-text">
                    <h3>{skill.expertise}</h3>
                    <span>
                        {skill.time > 1 ? `More than ${skill.time} years` : `Close to ${skill.time} year`}
                    </span>
                </div>
                {
                    isOpen ?
                        <i
                            className="fas fa-caret-up"
                            onClick={toggleDropDown}
                        ></i>
                        :
                        <i
                            className="fas fa-caret-down"
                            onClick={toggleDropDown}
                        ></i>
                }
            </div>
            <div className={dropDownSkillsClass}>
                {
                    titles.map((title, index) => {
                        return (
                            <Skill
                                key={index}
                                skill={title}
                                percentage={percentages[index]}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default SkillDropDown