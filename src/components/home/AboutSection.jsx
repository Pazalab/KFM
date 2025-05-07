import { Link } from "react-router-dom"
import { LuMoveRight } from "react-icons/lu"
const AboutSection = () => {
  return (
    <div className="about-section">
              <div className="inner-row">
                        <div className="about-section-content">
                                   <h3 data-aos="fade-down">About Us</h3>
                                   <h2 data-aos="fade-up">Your Trusted Partner in Flour Excellence for Over 20 Years</h2>
                                   <div className="paragraph-split">
                                              <p data-aos="zoom-in-up">We are a flour milling company in Kenya, trusted by communities and homes nationwide. Our products are a reflection of our deep connection to Kenyan traditions, providing reliable, high-quality flour that has supported generations. From urban families to rural households, we are proud to be part of the shared journey of nourishment and growth.</p>
                                              <div className="paragraph-box">
                                                          <p data-aos="zoom-in-up">Beyond tradition, we embrace innovation by creating unique flour blends enriched with nutrients to promote healthier lifestyles. These versatile mixes go beyond porridge, offering options tailored for modern dietary needs while maintaining the quality and care our customers trust.</p>
                                                          <Link to={"/about-us"} data-aos="zoom-in-up"> Read More <span><LuMoveRight /></span></Link>
                                              </div>
                                   </div>
                        </div>
              </div>
    </div>
  )
}

export default AboutSection