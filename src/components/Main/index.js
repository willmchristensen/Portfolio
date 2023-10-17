import './Main.css'
import NavBar from '../NavBar';
import Skills from '../Skills';

const skills = {
  'Javascript': 75,
  'Python': 75,
  'HTML5': 75,
  'CSS3': 75
}

function Main() {
  return (
    <>
    <NavBar></NavBar>
    <div className="main-wrapper">
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
        </div>
        <div className="portrait-container">
          <div className="circle first"></div>
          <div className="circle second"></div>
          <div className="circle third"></div>
          <img 
            className="portrait" 
            src="/assets/portrait.jpg" 
            alt="portrait-of-me" 
          />    
        </div>
      </div>
    </div>
    <Skills skills={skills}/>
    </>
  )
}
export default Main;