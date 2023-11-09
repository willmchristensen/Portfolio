import './ContactMe.css';
import ContactForm from './Form';
function ContactMe() {
    return (
        <div className="contact-me">
            <div className="about-me-title-container">
                <h1 className='about-me-title'>Contact Me</h1>
                <h3 className='about-me-subtitle'>Get in touch</h3>
            </div>
            <div className="contact-me-wrapper">
                <div className="contact-me-container">
                    <div className="contact-me-info">
                        <div className="info-container">
                            <div className="info-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div className="info-content-container">
                                <div className="info-header"><h3>Email</h3></div>
                                <div className="info-details">willmchristensen@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-me-form">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;