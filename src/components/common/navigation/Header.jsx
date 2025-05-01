import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo.jpg"
import { MdLocalPhone, MdOutlineWhatsapp } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import { useContext } from "react";
import { sidebarContext } from "./navcontext";
const Header = () => {
   // eslint-disable-next-line no-unused-vars
   const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);

  return (
          <header>
                   <div className="inner-row">
                              <div className="header-content">
                                       <Link to={"/"} className="logo">
                                                <img src={logo} alt="" />
                                       </Link>
                                       <nav>
                                               <div className="top-nav">
                                                         <p><span><MdLocalPhone /></span> Call Now: +254 7124 75566</p>
                                               </div>
                                                <div className="bottom-nav">
                                                           <ul>
                                                                     <li><NavLink to={"/"}>Home</NavLink></li>
                                                                     <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                                                                     <li><NavLink to={"/products"}>Products</NavLink></li>
                                                                     {/* <li><NavLink to={"/services"}>Services</NavLink></li> */}
                                                                     <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                                           </ul>
                                                           <div className="action-btn">
                                                                     <Link to={"https://wa.me/254712475566"} target="_blank"><span><MdOutlineWhatsapp /></span> Place an Order</Link>

                                                                     <div className="menu-btn" onClick={() => setSidebarStatus(true)}>
                                                                               <span><HiOutlineMenu /></span>
                                                                     </div>
                                                           </div>
                                                </div>
                                       </nav>
                              </div>
                   </div>
          </header>
  )
}

export default Header