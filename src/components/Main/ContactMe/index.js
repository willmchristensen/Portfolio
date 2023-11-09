import './ContactMe.css';
import ContactForm from './Form';
function ContactMe() {
    return (
        <div className="main-wrapper" id="contact">
            <div className="about-me-title-container">
                <h1 className='about-me-title'>Contact Me</h1>
                <h3 className='about-me-subtitle'>Get in touch</h3>
            </div>
            <div className="contact-me-wrapper">
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactMe;