import { Link } from "react-router-dom"
import { CgFacebook } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { AiOutlineTikTok } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import logo from "../../assets/logo-white.png"

const Footer = () => {
  return (
    <footer>
             <div className="inner-row">
                        <div className="footer-content">
                                     <div className="top-row">
                                               <Link to={"/"} className="footer-logo">
                                                        <img src={logo} alt="KFM LOGO" />
                                               </Link>
                                               <ul>
                                                        <li><Link to={"/"}>Home</Link></li>
                                                        <li><Link to={"/about-us"}>About Us</Link></li>
                                                         <li><Link to={"/products"}>Products</Link></li>
                                                        <li><Link to={"/services"}>Services</Link></li>
                                                        <li><Link to={"/contact-us"}>Contact Us</Link></li>
                                               </ul>
                                               <div className="social-links">
                                                          <ul>
                                                                   <li><Link to={"/"}><span><CgFacebook /></span></Link></li>
                                                                   <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                                   <li><Link to={"/"}><span><RiInstagramLine /></span></Link></li>
                                                                   <li><Link to={"/"}><span><AiOutlineTikTok /></span></Link></li>
                                                                   <li><Link to={"/"}><span><GrLinkedinOption /></span></Link></li>
                                                          </ul>
                                               </div>
                                     </div>
                                     <div className="copyright">
                                                 <p>All rights reserved &copy; {new Date().getFullYear()} Kirinyaga Flour Mills&trade;</p>
                                                 <div className="flex-item">
                                                         <p>Terms of Service</p>
                                                         <span>|</span>
                                                         <p>Privacy Policy</p>
                                                 </div>
                                     </div>
                        </div>
             </div>
    </footer>
  )
}

export default Footer