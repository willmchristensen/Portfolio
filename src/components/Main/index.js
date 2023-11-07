import './Main.css'
import NavBar from './NavBar';
import Skills from './Skills';
import Portrait from './Portrait';
import Button from './Button';
import Footer from './Footer';
import MobilePortrait from './MobilePortrait';
const items = [
  'Home',
  'About',
  'Skills',
  'Services',
  'Portfolio',
  'Contact'
];

const icons = [
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
      <div className="app-wrapper">
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
              <p className="main-text-paragraph">
                Customer service expert looking to bridge the communication gap between developers and end users.
              </p>
              <Button
                text={'Contact Me'}
                icon={<i class="fas fa-angle-right"></i>}
              />
            </div>
            <div className="regular-portrait-wrapper">
              <Portrait/>
            </div>
            <MobilePortrait />
          </div>
        </div>
        <Skills />
      </div>
      <Footer items={items} icons={icons} />
    </>
  )
}
export default Main;