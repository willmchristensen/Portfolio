import './AboutMe.css';
import Button from '../Button';
function AboutMe() {
    return (
        <div className="main-wrapper" id="about">
            <div className="about-me-title-container">
                <h1 className='about-me-title'>About Me</h1>
                <h3 className='about-me-subtitle'>My introduction</h3>
            </div>
            <div className="about-me-container">
                <div className="about-me-content-wrapper">
                <img
                    className="about-me-image"
                    src="/willmchristensen/assets/portrait.jpg"
                    alt="portrait-of-me"
                />
                </div>
                <div className="about-me-content-wrapper">
                    <div className="about-me-paragraph-experience">
                        <p className="about-me-paragraph">
                            Web developer with significant experience working in web technologies and delivering quality work. 
                        </p>
                        <div className="about-me-experience">
                            <div className="experience-content">
                                <h2 className="experience-title">
                                    02+
                                </h2>
                                <span className="experience-description">
                                    Years experience
                                </span>
                            </div>
                            <div className="experience-content">
                                <h2 className="experience-title">
                                    4+ 
                                </h2>
                                <span className="experience-description">
                                    Completed Projects
                                </span>
                            </div>
                        </div>
                        <div className="about-me-button">
                            <a href='/assets/Resume.pdf' download='Resume.pdf'>
                                <Button text="Download CV" icon={<i class="fas fa-download"></i>} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;