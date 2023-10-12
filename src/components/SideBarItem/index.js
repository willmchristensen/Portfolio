import './SideBarItem.css';
function SideBarItem({item}){
    return(
        <li className="sidebar-item">
            {item}
        </li>
    )
}
export default SideBarItem;