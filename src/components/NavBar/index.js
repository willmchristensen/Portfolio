import './NavBar.css';
import { useState } from 'react';
import SideBar from '../SideBar';

function NavBar() {
    const [showMenu, setShowMenu] = useState(true);
    const menuClassName = showMenu ? 'sidebar' : 'hidden';

    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return (
        <nav>
            <ul
                className='navbar-container'
            >
                <div 
                    className="navbar-item-wrapper"
                >
                    <li className='navbar-item'>
                        <i 
                            class="fas fa-bars"
                            onClick={handleClick}
                        >
                        </i>
                    </li>
                    <SideBar 
                        menuClassName={menuClassName}
                        setShowMenu={setShowMenu}
                        showMenu={showMenu}
                    />
                </div>
                <li className='navbar-item'>
                    will christensen
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;