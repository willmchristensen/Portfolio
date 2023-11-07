import './MobilePortraitButtons.css'
import PortraitButton from "./PortraitButton";

const icons = [
    <i class="fab fa-linkedin-in"></i>,
    <i class="fas fa-globe"></i>,
    <i class="fab fa-github"></i>
];

const links = [
    "https://www.linkedin.com/in/will-christensen-85531317a", 
    'https://www.google.com', 
    'https://github.com/willmchristensen' 
];

function MobilePortraitButtons(){
    return(
        <div className="mobile-portrait-buttons-container">
            {
                icons.map((icon,index) => {
                    return(
                        <PortraitButton icon={icon} link={links[index]} />
                    )
                })
            }
        </div>
    )
}
export default MobilePortraitButtons;