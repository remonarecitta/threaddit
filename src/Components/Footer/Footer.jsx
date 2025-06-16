import './Footer.css'
import logo from '../Assets/logo.png';

const Footer = () =>{
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={logo}/>
                
            </div>
            <ul className='footer-links'>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            <div className='footer-social-icon'>
                <div className='footer-social-icon-item'>
                    <img src={"https://img.icons8.com/ios-filled/50/000000/facebook-new.png"} alt='facebook'/>
                    </div>
                     <div className='footer-social-icon-item'>
                    <img src={"https://img.icons8.com/ios-filled/50/000000/twitter.png"} alt='twitter'/>
                    </div>
                     <div className='footer-social-icon-item'>
                    <img src={"https://img.icons8.com/ios-filled/50/000000/instagram-new.png"} alt='instagram'/>
                    </div>
                     <div className='footer-social-icon-item'>
                    <img src={"https://img.icons8.com/ios-filled/50/000000/linkedin.png"} alt='linkedin'/>
                    </div>
                     <div className='footer-social-icon-item'>
                    <img src={"https://img.icons8.com/ios-filled/50/000000/pinterest.png"} alt='pinterest'/>
                    </div>
                </div>
            <div className='footer-copyright'>
                <hr/>
                <p>© 2023 Shopper. All rights reserved.</p>
                </div>
        </div>
    )
}

export default Footer;