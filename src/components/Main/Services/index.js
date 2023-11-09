import './Services.css';
import { services } from '../../../constants/items';
import ServicesCard from './ServicesCard';
function Services() {
    return (
        <div className="main-wrapper">
            <div className="about-me-title-container">
                <h1 className='about-me-title'>Services</h1>
                <h3 className='about-me-subtitle'>What i offer</h3>
            </div>
            <div className="services-cards-container">
                {
                    services.map(s => {
                        return (
                            <ServicesCard icon={s.icon} title={s.title} bullets={s.bullets}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Services;