import './Footer.css';
import MobileMenu from './MobileMenu';
import FooterPortraitButtons from './FooterButtons';
function Footer({items,icons,location}){
    return(
        <footer className="main-footer-wrapper">
            <div className="main-footer-container">
                <div className="footer-content">
                    <h2 className="footer-title">
                        Will
                    </h2>
                    <span className='footer-subtitle'>
                        Fullstack Developer
                    </span>
                </div>
                <div className="footer-content">
                    <FooterPortraitButtons />
                </div>
                {/* <MobileMenu items={items} icons={icons} locations={location}/> */}
            </div>
        </footer>
    )
}
export default Footer;