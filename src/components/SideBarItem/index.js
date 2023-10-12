import './SideBarItem.css';

function SideBarItem({icon,item}){
    return(
        <li className="sidebar-item">
            {icon}
            <span className="sidebar-item-text">
                {item}  
            </span>
        </li>
    )
}

export default SideBarItem;