import './Footer.css';
import MobileMenu from './MobileMenu';
function Footer({items,icons}){
    return(
        <footer className="main-footer-container">
            <div className="main-footer-wrapper">
                <h2 className="footer-title">
                    Will Christensen
                </h2>
                <h3 className='main-text-subheader'>
                    Fullstack Developer
                </h3>
                <MobileMenu items={items} icons={icons}/>
            </div>
        </footer>
    )
}
export default Footer;