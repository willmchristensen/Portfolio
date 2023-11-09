import './ServicesModal.css';

function ServicesModal({title,bullets}){
    return(
        <div className="services-info-wrapper">
            <div className="services-info-container">
                <h1 className='services-info-title'>{title}</h1>
                <ul>
                {
                    bullets.map(b => {
                        return(
                            <li className='services-modal-list-item'>{b}</li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default ServicesModal;