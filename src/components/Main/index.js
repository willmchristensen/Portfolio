import './Main.css'
import NavBar from '../NavBar';
import Skills from '../Skills';
import MobilePortraitButtons from '../MobilePortraitButtons';
import MobileFooter from '../MobileFooter';

const items = [
  'Home',
  'About',
  'Skills',
  'Services',
  'Portfolio',
  'Contact'
];

const  icons = [
  <i class="fas fa-home"></i>,
  <i class="fas fa-id-card"></i>,
  <i class="fas fa-sliders-h"></i>,
  <i class="fas fa-project-diagram"></i>,
  <i class="fas fa-code-branch"></i>,
  <i class="fas fa-address-book"></i>
]

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
          <div className="portrait-wrapper">
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
            <MobilePortraitButtons />
          </div>
        </div>
      </div>
      <Skills />
      <MobileFooter items={items} icons={icons}/>
    </>
  )
}
export default Main;