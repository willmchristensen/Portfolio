import './SideBar.css'
import SideBarItem from '../SideBarItem';
import { useEffect, useRef } from 'react';

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
    <i class="fa-solid fa-star"></i>,
    <i class="fas fa-project-diagram"></i>,
    <i class="fas fa-address-book"></i>
]


function SideBar({showMenu,setShowMenu,menuClassName}){
    const handleClick = () => {
        if(showMenu){
            setShowMenu(false)
        }else{
            setShowMenu(true)
        }
    }
    const sidebarRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            console.log(e.target.className);
            if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
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
        document.addEventListener('mousedown',handleClickOutside);
        return () => {
            document.removeEventListener('mousedown',handleClickOutside);
        }
    },[sidebarRef,setShowMenu]);

    return(
        <div className={menuClassName} ref={sidebarRef}>
            <li className='bars-icon-container'>
                <i 
                    class="fas fa-bars"
                    onClick={handleClick}
                    id='bars-icon'
                >
                </i>
            </li>
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
    )
}

export default SideBar;