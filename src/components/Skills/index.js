import './Skills.css'
import SkillDropDown from './SkillDropDown';
const skills = [
    {
        expertise: 'Frontend developer',
        time: '2',
        icon: <i class="fas fa-code"></i>,
        skills:{
            'HTML5':70,
            'CSS3': 70,
            'JavaScript': 70,
            'React': 70,
        }
    },
    {
        expertise: 'Backend developer',
        time: '1',
        icon: <i class="fas fa-server"></i>,
        skills:{
            'Python':50,
            'Node Js': 50,
            'SQL': 50,
            'Sequelize': 50,
        }
    }
];


function Skills(){
    return(
        <div className="skills-container">
            <div className="skills-title-container">
                <h2 className='skills-title'>Skills</h2>
                <span>My technical level</span>
            </div>
            <div className="skills-dropdowns-container">
                {
                    skills.map(skill => {
                        return (
                            <SkillDropDown skill={skill} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Skills;