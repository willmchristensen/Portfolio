import './Button.css'
function Button({text, icon}){
    return(
        <button className="button">
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