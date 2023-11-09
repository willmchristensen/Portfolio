import './NavBarItem.css'

function NavBarItem({ item, location}) {
    return (
        <li className="navbar-item-container">
            <a href={location} className="navbar-link">
                {item}
            </a>
        </li>
    )
}

export default NavBarItem;