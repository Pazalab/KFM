import { faqs } from "../../data/faqs"
import FaqMoja from "./FaqMoja"

const FaqSection = () => {
  return (
    <div className="faq-section">
                <div className="inner-row">
                            <div className="faq-section-content">
                                       <div className="faqs-intro">
                                                <h2 data-aos="fade-down">Got Questions? We've Got Answers</h2>
                                                <p data-aos="fade-up">We love it when our customers ask questions—it means you care about what goes into your meals just as much as we do. Here are some of the most common questions we get about our products, services, and how to make the most of Kirinyaga Flour Mills.</p>
                                       </div>

                                       <div className="faqs-row">
                                                   { faqs.map(item => <FaqMoja  data={item} key={item.id}/>)}
                                       </div>
                            </div>
                </div>
    </div>
  )
}

export default FaqSection