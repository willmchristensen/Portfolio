import './Skills.css'
import Skill from '../Skill';

function Skills({skills}){

    const titles = Object.keys(skills);
    const percentages = Object.values(skills);

    return(
        <div className="skills-container">
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
    )
}
export default Skills;