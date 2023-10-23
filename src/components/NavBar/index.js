import './NavBar.css';
import MobileFooter from '../MobileFooter';
import NavBarItem from './NavBarItem';

const items = [
    'Home',
    'About',
    'Skills',
    'Services',
    'Portfolio',
    'Contact'
];

const  icons = [
    <i class="fas fa-home"></i>,
    <i class="fas fa-id-card"></i>,
    <i class="fas fa-sliders-h"></i>,
    <i class="fas fa-project-diagram"></i>,
    <i class="fas fa-code-branch"></i>,
    <i class="fas fa-address-book"></i>
]

function NavBar() {
    
    return (
        <nav>
            <div className="mobile-menu-container">
                <MobileFooter items={items} icons={icons}/>
            </div>
            <ul className="navbar">
                {
                    items.map((item,index) => {
                        return(
                            <NavBarItem 
                                key={index}
                                item={item} 
                            />
                        )
                    })
                }
            </ul>
        </nav>
    )
}
export default NavBar;