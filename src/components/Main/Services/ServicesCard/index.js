import './ServicesCard.css';
import OpenModalButton from '../../../OpenModalButton';
import ServicesModal from '../ServicesModal';
function ServicesCard({icon, title, bullets}){
    return(
        <div className="service-card-wrapper">
            <div className="service-card-container">
                <div className="services-card-icon">
                    {icon}
                </div>
                <div className="services-card-text">
                    <h3>{title}</h3>
                </div>
                {/* <Button text={'View More'} icon={<i class="fas fa-arrow-right"></i>} /> */}
                <OpenModalButton 
                    buttonText={'View More'}
                    modalComponent={<ServicesModal title={title} bullets={bullets}/>}
                    icon={<i class="fas fa-arrow-right"></i>}
                />
            </div>
        </div>
    )
}
export default ServicesCard;