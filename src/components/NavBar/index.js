import './NavBar.css';
import SideBar from '../SideBar';
import NavBarItem from '../NavBarItem';

const sideBarItems = [
    'Home',
    'About',
    'Skills',
    'Services',
    'Portfolio',
    'Contact'
];

function NavBar() {
    
    return (
        <nav>
            <div className="mobile-menu-container">
                <SideBar />
            </div>
            <ul className="navbar">
                {
                    sideBarItems.map((item,index) => {
                        return(
                            <NavBarItem 
                                key={index}
                                item={item} 
                            />
                        )
                    })
                }
            </ul>
        </nav>
    )
}
export default NavBar;