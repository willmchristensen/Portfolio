import './SideBar.css'
import Hamburger from '../Hamburger';
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
    <i class="fas fa-code-branch"></i>,
    <i class="fas fa-address-book"></i>
]


function SideBar() {
    const [showMenu, setShowMenu] = useState(false);
    const menuClassName = 'sidebar' + (showMenu ? '' : ' hidden')
    const sidebarRef = useRef();

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => setShowMenu(false);
        const listener = (event) => {
            console.log(event.target.className)
            if (
                !sidebarRef.current.contains(event.target) ||
                event.target.className ===  'sidebar-item-icon' ||
                event.target.className === 'sidebar-item-text' ||
                event.target.className === 'sidebar-item') {
                closeMenu();
            }
        }
        document.addEventListener('mousedown', listener)
        return () => {
            document.removeEventListener('mousedown', listener)
        }
    }, [sidebarRef]);

    return (
        <div className='sidebar-container'>
            <Hamburger showMenu={showMenu} setShowMenu={setShowMenu} />
            <ul className={menuClassName} ref={sidebarRef}>
                {
                    sideBarItems.map((item, index) => {
                        return (
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
    )
}

export default SideBar;