import './SideBarItem.css';

function SideBarItem({ icon, item, location }) {
    const handleClick = () => {
        console.log('handleclick')
        window.location.href = location;
    }
    return (
        <li className="sidebar-item" onClick={handleClick}>
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