import './Hamburger.css';

function Hamburger({setShowMenu,showMenu}){

    return (
        <button 
            onClick={() => setShowMenu(!showMenu)}
            className='bars-icon-button'
        >
            <i
                class="fas fa-bars"
                id='bars-icon'
            >
            </i>
        </button>
    )

}
export default Hamburger;