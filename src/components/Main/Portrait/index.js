import './Portrait.css';
function Portrait() {
  return (
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
    </div>
  )
}
export default Portrait;