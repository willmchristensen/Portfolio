import './Button.css'
function Button({onClick,text, icon}){
    return(
        <button onClick={onClick}className="button">
            <span className="button-text">
                {text}  
            </span>
            <div className="button-icon">
                {icon}  
            </div>
        </button>
    )
}
export default Button;