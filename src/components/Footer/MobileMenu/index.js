import './SideBar.css'
import Hamburger from './Hamburger';
import SideBarItem from './SideBarItem';
import { useEffect, useRef, useState } from 'react';

function MobileMenu({ items, icons }) {
    const [showMenu, setShowMenu] = useState(false);
    const menuClassName = 'mobile-menu' + (showMenu ? '' : ' hidden')
    const mobileMenuRef = useRef();

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => setShowMenu(false);
        const toggleMenu = () => setShowMenu(!showMenu);
        const listener = (event) => {
            console.log('event.target.classList', event.target.classList);
            const isButton = event.target.classList.contains('custom-hamburger-button');
            const isIcon = event.target.classList.contains('fas');
            const isSidebar = event.target.classList.contains('sidebar-item') || event.target.classList.contains('sidebar-item-text') || event.target.classList.contains('sidebar-item-icon') ;
            const isHamburger = event.target.classList.contains('fa-times') || event.target.classList.contains('fa-bars'); 
            // user clicks hamburger button > do nothing(let event handler toggle menu)
            // user clicks outside of the menu 
            if (
                !mobileMenuRef.current.contains(event.target) &&
                !isButton &&
                !isIcon 
            ) {
                closeMenu();
            }else if((isIcon && !isHamburger) || isSidebar){
                toggleMenu();
            }
        };
        document.addEventListener('mousedown', listener)
        return () => {
            document.removeEventListener('mousedown', listener)
        }
    }, [mobileMenuRef, showMenu]);

    return (
        <div className='sidebar-container'>
            <div className="mobile-footer">
                <Hamburger
                    showMenu={showMenu}
                    setShowMenu={setShowMenu}
                />
            </div>
            <ul
                className={menuClassName}
                ref={mobileMenuRef}
            >
                <div className="mobile-menu-row">
                    {
                        items.slice(0, 3).map((item, index) => {
                            return (
                                <SideBarItem
                                    key={index}
                                    item={item}
                                    icon={icons[index]}
                                />
                            )
                        })
                    }
                </div>
                <div className="mobile-menu-row">
                    {
                        items.slice(3).map((item, index) => {
                            return (
                                <SideBarItem
                                    key={index}
                                    item={item}
                                    icon={icons[index + 3]}
                                />
                            )
                        })
                    }
                </div>
            </ul>
        </div>
    )
}

export default MobileMenu;