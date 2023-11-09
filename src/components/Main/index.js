import './Main.css'
import Skills from './Skills';
import Portrait from './Portrait';
import Button from './Button';
import MobilePortrait from './MobilePortrait';
import AboutMe from './AboutMe';
import Services from './Services';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';

function Main() {
  return (
    <>
      <div className="app-wrapper">
        <div className="main-wrapper" id="home">
          <div className="main-container">
            <div className="main-text-container">
              <h1
                className='main-text'
              >
                Hi, I am Will Christensen
              </h1>
              <h3 className="main-text-subheader">
                Full Stack Software Engineer
              </h3>
              <p className="main-text-paragraph">
                Customer service expert looking to bridge the communication gap between developers and end users.
              </p>
              <Button
                text={'Contact Me'}
                icon={<i class="fas fa-angle-right"></i>}
              />
            </div>
            <div className="regular-portrait-wrapper">
              <Portrait />
            </div>
            <MobilePortrait />
          </div>
        </div>
        <AboutMe />
        <Skills />
        <Services />
        <Portfolio />
        <ContactMe />
      </div>
    </>
  )
}
export default Main;