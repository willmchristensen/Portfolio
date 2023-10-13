import './NavBar.css';
import { useState } from 'react';
import SideBar from '../SideBar';

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const menuClassName = showMenu ? 'sidebar' : 'hidden';

    const handleClick = () => {
        if(showMenu){
            setShowMenu(false)
        }else{
            setShowMenu(true)
        }
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
            </ul>
        </nav>
    )
}
export default NavBar;