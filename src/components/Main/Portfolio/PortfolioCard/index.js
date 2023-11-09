import './PortfolioCard.css';

function PortfolioCard({ title, description, link, image }) {

    return (
        <div className="portfolio-card-container">
            <div className="portfolio-card-image">
                <img
                    className="about-me-image"
                    src={image}
                    alt="portrait-of-me"
                />
            </div>
            <div className="portfolio-card-content">
                <h3 className="portfolio-card-title">
                    {title}
                </h3>
                <p className="portfolio-card-paragraph">
                    {description}
                </p>
                <a
                    className='demo-button'
                    href={link}
                >
                    <span className="demo-button-text">
                        Demo    
                    </span>
                    <div className="demo-button-icon">
                        <i class="fas fa-arrow-right"></i>
                    </div>
                </a>
            </div>
        </div>
    )

}

export default PortfolioCard;