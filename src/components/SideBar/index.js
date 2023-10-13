import './SideBar.css'
import SideBarItem from '../SideBarItem';

const sideBarItems = [
    'Home',
    'Projects',
    'About Me',
    'Contact'
];

const sideBarIcons = [
    <i class="fas fa-home"></i>,
    <i class="fas fa-project-diagram"></i>,
    <i class="fas fa-id-card"></i>,
    <i class="fas fa-address-book"></i>
]


function SideBar({showMenu,setShowMenu,menuClassName}){

    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return(
        <div className={menuClassName}>
            <li className='navbar-item'>
                <i 
                    class="fas fa-bars"
                    onClick={handleClick}
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