import './SideBar.css'
import SideBarItem from '../SideBarItem';
import { useEffect, useRef, useState } from 'react';

const sideBarItems = [
    'Home',
    'About',
    'Skills',
    'Services',
    'Portfolio',
    'Contact'
];

const sideBarIcons = [
    <i class="fas fa-home"></i>,
    <i class="fas fa-id-card"></i>,
    <i class="fas fa-sliders-h"></i>,
    <i class="fas fa-project-diagram"></i>,
    <i class="fas fa-address-book"></i>,
    <i class="fas fa-mobile-alt"></i>
]


function SideBar(){
    const [showMenu, setShowMenu] = useState(false);
    const menuClassName = 'sidebar' + (showMenu ? '' : ' hidden');

    const sidebarRef = useRef();

    useEffect(() => {
        console.log('useEffect', showMenu)
        if (!showMenu){
            console.log('!showMenu in useEffect, so we are returning from useEffect')
            return;
        }
        const closeMenu = (e) => {
            if(showMenu && 
                sidebarRef.current && 
                !sidebarRef.current.contains(e.target
            )){
                setShowMenu(false);
            }else if(
                e.target.className === 'sidebar-item' || 
                e.target.className === 'sidebar-item-text' || 
                e.target.className === 'sidebar-item-icon' || 
                e.target.className.startsWith('f') 
            ){
                setShowMenu(false);
            }
        };
        document.addEventListener('mousedown',closeMenu);
        return () => {
            document.removeEventListener('mousedown',closeMenu);
        }
    },[showMenu]);

    const toggleMenu = () => {
        setShowMenu(prevState => !prevState);
    }

    return(
        <>  
            <li
                className='navbar-item'
                onClick={toggleMenu}
            >
                <i class="fas fa-bars"></i>
            </li>
            <div className={menuClassName} ref={sidebarRef}>
                <ul className='sidebar-items-container'>
                    {
                        sideBarItems.map((item, index) => {
                            return(
                                <SideBarItem
                                    key={index}
                                    item={item}
                                    icon={sideBarIcons[index]} 
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default SideBar;