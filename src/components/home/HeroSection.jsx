import { Link } from "react-router-dom"
import { LuMoveRight } from "react-icons/lu";
import hero1 from "../../assets/hero3.jpg"
const HeroSection = () => {
  return (
    <div className="hero-section">
              <div className="inner-row">
                        <div className="hero-section-content">
                                      <div className="top-hero-texts">
                                                {/* <h1 data-aos="zoom-in-right">Crafting Nutritious Flour for Every Lifestyle.</h1> */}
                                                 <h1 data-aos="zoom-in-right">Uji Halisi, <br /> Afya Bora.</h1>
                                                <div className="hero-description">
                                                            <p data-aos="zoom-in-left">From expertly milled porridge flours to innovative blends and nutrient-packed add-ons, we’re redefining healthy eating in Kenya. With a focus on quality, safety, and staying ahead of global health trends, we’re here to fuel your lifestyle with every scoop.</p>

                                                            <Link to={"/products"} className="btn" data-aos="zoom-in-up">Explore <span className="coverflow"></span> <span className="icon"><LuMoveRight /></span></Link>
                                                </div>
                                      </div>
                        </div>
              </div>

              <div className="hero-image-wrapper">
                        <div className="hero-image-one" data-aos="fade-right" data-aos-offset="-100">
                                   <img src={hero1} alt="" />
                        </div>
                        <div className="hero-image-two" data-aos="fade-left">
                                  <div className="hero-image-texts" data-aos="zoom-in">
                                            <h2>At Kirinyaga Flour Mills, we’re all about turning grains into gains: Milling Nutrition to Perfection.</h2>

                                            <Link to={"/"}>Learn More about Our Process <span><LuMoveRight /></span></Link>
                                  </div>
                        </div>
              </div>
    </div>
  )
}

export default HeroSection