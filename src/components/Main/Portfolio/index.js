import { useState } from 'react';
import './Portfolio.css';
import PortfolioCard from './PortfolioCard';
import { projects } from '../../../constants/items';
function Portfolio() {
    const [project, setProject] = useState(0);
    const p = projects[project];
    const handleDecrease = () => {
        if (project === 0) {
            setProject(2)
        } else {
            setProject(project - 1)
        }
    }
    const handleIncrease = () => {
        if (project === 2) {
            setProject(0)
        } else {
            setProject(project + 1)
        }
    }

    const handleClick = (index) => {
        setProject(index)
    }

    const circleClasses = projects.map((p, index) => (index === project ? "fas fa-circle" : "far fa-circle"));

    return (
        <div className="main-wrapper" id="portfolio">
            <div className="about-me-title-container">
                <h1 className='about-me-title'>Portfolio</h1>
                <h3 className='about-me-subtitle'>Most recent work</h3>
            </div>
            <div className="portfolio-wrapper">
                <i
                    class="far fa-arrow-alt-circle-left"
                    onClick={() => handleDecrease()}
                ></i>
                <div className="portfolio-container">
                    <PortfolioCard
                        title={p.title}
                        description={p.description}
                        link={p.link}
                        image={p.image}
                    />
                </div>
                <i
                    class="far fa-arrow-alt-circle-right"
                    onClick={() => handleIncrease()}
                ></i>
            </div>
            <div className="circles-container">
                {
                    circleClasses.map((circleClass, index) => (
                        <i className={circleClass} key={index} onClick={() => handleClick(index)}></i>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio;