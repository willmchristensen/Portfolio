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


function SideBar({menuClassName}){
    return(
        <div className={menuClassName}>
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