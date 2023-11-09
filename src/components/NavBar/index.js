import './NavBar.css';
import NavBarItem from './NavBarItem';

function NavBar({items, location}) {
    
    return (
        <nav className='navbar-wrapper'>
            <ul className="navbar-container">
                {
                    items.map((item,index) => {
                        return(
                            <NavBarItem 
                                key={index}
                                item={item}
                                location={location[index]} 
                            />
                        )
                    })
                }
            </ul>
        </nav>
    )
}
export default NavBar;