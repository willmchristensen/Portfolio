import './NavBar.css';
import { useState } from 'react';
import SideBar from '../SideBar';

function NavBar() {

    return (
        <nav>
            <ul
                className='navbar-container'
            >
                <div 
                    className="navbar-item-wrapper"
                >
                    <SideBar />
                </div>
            </ul>
        </nav>
    )
}
export default NavBar;