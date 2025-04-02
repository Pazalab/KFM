import { testimonials } from "../../data/testimonials"
import { RiDoubleQuotesL } from "react-icons/ri";
import kam from "../../assets/kam.png"
import kebs from "../../assets/kebs.png"
import mik from "../../assets/made-in-kenya.png"

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
            <div className="inner-row">
                      <div className="testimonials-content">
                                <div className="testimonials-intro">
                                           <h3 className="intro" data-aos="fade-down">Testimonials</h3>
                                           <h2 data-aos="fade-up">Discover the Impact: What Our Happy Customers are Saying!</h2>
                                </div>
                      </div>
            </div>

            <div className="testimonials-row">
                    { testimonials.map(item =>
                          <div className="testimonial-moja" key={item.id} data-aos="zoom-in">
                                      <span><RiDoubleQuotesL /></span>
                                      <p>{item.content}</p>
                                      <h3>~{item.name}</h3>
                          </div>
                    )}
            </div>


            <div className="accreditation-area">
                      <div className="inner-row">
                                  <div className="accredition-header">
                                             <h3 data-aos="fade-right">Our Partners</h3>
                                             <span data-aos="fade-left"></span>
                                  </div>
                                  <div className="partner-logos" data-aos="zoom-in-up">
                                             <img src={kebs} alt="" />
                                             <img src={mik} alt="" />
                                             <img src={kam} alt="" />
                                  </div>
                      </div>
            </div>
    </div>
  )
}

export default TestimonialsSection