import './MobilePortrait.css';
import MobilePortraitButtons from './MobilePortraitButtons';
function MobilePortrait() {
    return (
        <div className="mobile-portrait-wrapper">
            <div className="mobile-portrait-container">
                <MobilePortraitButtons />
                <div className="mobile-portrait-image-container">
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
export default MobilePortrait;
