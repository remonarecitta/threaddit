import react from "react";
import './Hero.css';
import home from '../Assets/home.png';

const Hero = () => {
    
    return (
        <div className="hero">
            <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
         <a href="#collections">
    <div>Latest Collection</div>
  </a>
        <img/>
            </div>
            </div>
            <div className="hero-right">
            <img src={home} alt="img"/>
            </div>
        </div>
    )
}

export default Hero;