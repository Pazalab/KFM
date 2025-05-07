import { useContext, useEffect, useRef } from "react"
import { sidebarContext } from "./navcontext"
import { Link, NavLink          } from "react-router-dom";
import gsap from "gsap";
import { CgClose } from "react-icons/cg";
import logo from "../../../assets/logo.jpg"
import { MdLocalPhone, MdOutlineWhatsapp } from "react-icons/md";

const Sidebar = () => {
    const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
    const sidebarRef = useRef();

    useEffect(() => {
             if(sidebarStatus){
                   sidebarRef.current.classList.add("active");

                   const tl = gsap.timeline();

                   tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                           y: 0,
                           duration: 0.8
                   })

                   tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                         y: 0,
                         duration: 0.8
                   })
             }
    }, [sidebarStatus])

    const handleSidebarRemove = () => {
          const tl = gsap.timeline();

          tl.to(sidebarRef.current.querySelector(".sidebar-content"), {
                y: "105%",
                duration: 0.5
          })

           tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                  y: "-105%",
                  duration: 0.5
          })


          setTimeout(() => {
                 sidebarRef.current.classList.remove("active");
                 setSidebarStatus(false)
          }, 2000)
    }
  return (
          <div ref={sidebarRef} className="sidebar-section">
                    <div className="sidebar-overlay"></div>
                    <div className="sidebar-content">
                              <div className="sidebar-header">
                                         <Link to={"/"}>
                                                <img src={logo} alt="" />
                                         </Link>
                                         <span onClick={handleSidebarRemove}><CgClose /></span>
                              </div>
                              <div className="sidebar-nav">
                                       <ul>
                                             <li><NavLink to={"/"}>Home</NavLink></li>
                                             <li><NavLink to={"/about-us"}>About Us</NavLink></li>
                                             <li><NavLink to={"/products"}>Products</NavLink></li>
                                             {/* <li><NavLink to={"/services"}>Services</NavLink></li> */}
                                             <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                    </ul>
                              </div>
                              <div className="sidebar-extra">
                                          <p><span><MdLocalPhone /></span> Call Now: +254 0712-475-566</p>
                                          <div className="action-btn">
                                                    <Link to={"https://wa.me/254707623670"} target="_blank"><span><MdOutlineWhatsapp /></span> Place an Order</Link>
                                          </div>
                              </div>
                    </div>
          </div>
  )
}

export default Sidebar