import './Main.css'
function Main() {
  return (
    <div className="main-wrapper">
      <div className="main-container">
        <h1 className='main-text'>Hi, I am Will Christensen,<br/> a Fullstack Developer</h1>
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
  )
}
export default Main;