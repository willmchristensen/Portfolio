import './NavBar.css';
import SideBar from '../SideBar';

function NavBar() {
    
    return (
        <nav>
            <ul
                className='navbar-container'
            >
                <SideBar />
           </ul>
        </nav>
    )
}
export default NavBar;