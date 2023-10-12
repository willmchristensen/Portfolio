import './SideBar.css'
import SideBarItem from '../SideBarItem';
const sideBarContent = [
    'Projects',
    'About Me',
    'Contact'
];
function SideBar({menuClassName}){
    return(
        <div className={menuClassName}>
            <ul className='sidebar-items-container'>
                {
                    sideBarContent.map(item => {
                        return(
                            <SideBarItem item={item} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SideBar;