import { Link } from "react-router-dom"
import flour from "../../assets/flourBg2.jpg"
import flour2 from "../../assets/flourBg3.jpg"
import { LuMoveUpRight } from "react-icons/lu";
import flour3 from "../../assets/flourBg4.jpg"
import flour4 from "../../assets/flourBg5.jpg"

const ServiceSection = () => {
  return (
    <div className="service-section">
              <div className="inner-row">
                       <div className="service-section-content">
                                 <div className="service-intro">
                                            <h3 className="intro" data-aos="fade-down">Our Capabilities</h3>
                                            <h2 data-aos="zoom-in-up">We Make, Deliver, and Supply Kenyan Homes with Quality Flour.</h2>
                                            <p data-aos="zoom-in-up">Our flour products are more than just ingredients—they’re the foundation of healthy, delicious meals for every Kenyan home. From versatile everyday staples to innovative blends enriched with nutrients, our range is crafted to support your health goals and lifestyle. </p>
                                 </div>
                       </div>
              </div>
              <div className="capabilities-row">
                       <div className="capability-moja big" data-aos="fade-right">
                                  <img src={flour} alt="" />
                                  <div className="capability-texts" data-aos="zoom-in">
                                              <div className="capability-header">
                                                      <h3>Flours</h3>
                                                      <Link to={"/"}><span><LuMoveUpRight /></span></Link>
                                              </div>
                                              <p>Discover wholesome nutrition with our wide range of flours, from traditional grains to nutrient-rich and gluten-free options. Explore our varieties and find the perfect choice to elevate your meals.</p>
                                  </div>
                       </div>
                       <div className="capability-moja" data-aos="zoom-in">
                                <img src={flour2} alt="" />
                                <div className="capability-texts">
                                            <div className="capability-header">
                                                     <h3>Porridge Mixes</h3>
                                                     <Link to={"/"}><span><LuMoveUpRight /></span></Link>
                                            </div>
                                            <p>Perfect for babies and those with special dietary needs.</p>
                                </div>
                       </div>
                       <div className="capability-moja" data-aos="zoom-in">
                                 <img src={flour3} alt="" />
                                 <div className="capability-texts">
                                           <div className="capability-header">
                                                      <h3>Spices for Food & Tea</h3>
                                                      <Link to={"/"}><span><LuMoveUpRight /></span></Link>
                                           </div>
                                           <p>Add flavor and warmth to your meals and beverages.</p>
                                 </div>
                       </div>
                       <div className="capability-moja end" data-aos="zoom-in-up">
                                <img src={flour4} alt="" />
                                <div className="capability-texts">
                                          <div className="capability-header">
                                                   <h3>Natural Supplements</h3>
                                                   <Link to={"/"}><span><LuMoveUpRight /></span></Link>
                                          </div>
                                          <p>Boost your health naturally with our range of nutrient-packed supplements.</p>
                                </div>
                       </div>
              </div>
    </div>
  )
}

export default ServiceSection