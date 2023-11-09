import './Message.css';

function Message({message,error}){
    return(
        <div className="message-wrapper">
            {message ? <h1 className='message-text'>{message}</h1> : <h1 className='error-text'>{error}</h1>}
        </div>
    )
}

export default Message;