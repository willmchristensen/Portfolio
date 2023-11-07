import './NavBar.css';
import NavBarItem from './NavBarItem';

const items = [
    'Home',
    'About',
    'Skills',
    'Services',
    'Portfolio',
    'Contact'
];

function NavBar() {
    
    return (
        <nav className='navbar-wrapper'>
            <ul className="navbar-container">
                {
                    items.map((item,index) => {
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