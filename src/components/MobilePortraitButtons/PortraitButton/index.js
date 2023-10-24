import './PortraitButton.css'
function PortraitButton({icon,link}){
    return(
        <a
            className="portrait-button"
        >
            {icon}
        </a>
    )
}
export default PortraitButton;