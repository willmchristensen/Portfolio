import './ServicesCard.css';
import Button from '../../Button';
function ServicesCard({icon, title}){
    return(
        <div className="service-card-wrapper">
            <div className="service-card-container">
                <div className="services-card-icon">
                    {icon}
                </div>
                <div className="services-card-text">
                    {title}
                </div>
                <Button text={'View More'} icon={<i class="fas fa-arrow-right"></i>} />
            </div>
        </div>
    )
}
export default ServicesCard;