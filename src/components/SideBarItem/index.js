import './SideBarItem.css';

function SideBarItem({icon,item}){
    return(
        <li className="sidebar-item">
            <span className="sidebar-item-icon">
                {icon}  
            </span>
            <span className="sidebar-item-text">
                {item}  
            </span>
        </li>
    )
}

export default SideBarItem;