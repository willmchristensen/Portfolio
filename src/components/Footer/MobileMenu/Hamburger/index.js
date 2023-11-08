import './Hamburger.css';

function Hamburger({setShowMenu,showMenu}){

    const openMenu = () => {
        setShowMenu(true)
    };
    const closeMenu = () => {
        setShowMenu(false)
    };

    return (
        <>
            {
                !showMenu ? 
                <button 
                    onClick={openMenu}
                    className='bars-icon-button custom-hamburger-button'
                >
                    <i
                        class="fas fa-bars"
                        id='bars-icon'
                    >
                    </i>
                </button>
                :
                <button
                    onClick={closeMenu}
                    className='times-icon-button custom-hamburger-button'
                >
                    <i 
                        class="fas fa-times"
                        id="times-icon"
                    ></i> 
                </button>
            }
        </>
    )

}
export default Hamburger;