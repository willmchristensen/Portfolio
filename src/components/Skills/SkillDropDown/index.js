import './SkillDropDown.css'
import Skill from "../Skill"
import { useState } from 'react';

function SkillDropDown({skill}){

    const titles = Object.keys(skill.skills);
    const percentages = Object.values(skill.skills);
    const [isOpen, setIsOpen] = useState(false);
    const dropDownSkillsClass = isOpen ? "dropdown-skills-container" : 'hidden';
    return(
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
                        class="fas fa-caret-up"
                        onClick={() => setIsOpen(!isOpen)}
                    ></i>
                    :
                    <i 
                        class="fas fa-caret-down"
                        onClick={() => setIsOpen(!isOpen)}
                    ></i>
                }
            </div>
            <div className={dropDownSkillsClass}>
                {
                    titles.map((title,index) => {
                        return(
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