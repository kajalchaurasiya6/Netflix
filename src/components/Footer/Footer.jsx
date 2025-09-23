import './Footer.css';
import  Youtube from '../../assets/youtube_icon.png';
import  twitter from '../../assets/twitter_icon.png';
import  instagram from '../../assets/instagram_icon.png';
import  facebook from '../../assets/facebook_icon.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={Youtube} alt="Youtube icon" width={'30px'}  />
        <img src={twitter} alt="twitter icon" width={'30px'}/>
        <img src={instagram} alt="instagram icon" width={'30px'}/>
        <img src={facebook} alt="facebook icon"width={'30px'} />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">
        © 1997-2025 Netflix,Inc.
      </p>
    </div>
  )
}

export default Footer