import './MobilePortraitButtons.css'
import PortraitButton from "./PortraitButton";

const mobileButtons = [
    <i class="fab fa-linkedin-in"></i>,
    <i class="fas fa-globe"></i>,
    <i class="fab fa-github"></i>
];

const links = [
    
];

function MobilePortraitButtons(){
    return(
        <div className="mobile-portrait-buttons-container">
            {
                mobileButtons.map(icon => <PortraitButton icon={icon} />)
            }
        </div>
    )
}
export default MobilePortraitButtons;