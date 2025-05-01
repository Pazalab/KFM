import { FaRegCircleDot } from "react-icons/fa6";
import Statements from "./Statements";

const AboutBody = () => {
  return (
    <div className="about-body">
              <div className="inner-row">
                        <div className="about-body-content">
                                    <h3 data-aos="fade-down">Our History</h3>

                                    <div className="about-body-history">
                                                 <div className="about-body-wrap">
                                                              <h2 data-aos="zoom-in-right"><span>Late</span> 1970s</h2>
                                                              <span className="separator">
                                                                        <span className="line" data-aos="fade-right"></span>
                                                                        <span className="icon" data-aos="zoom-in"><FaRegCircleDot /></span>
                                                                        <span className="line" data-aos="fade-left"></span>
                                                              </span>
                                                              <div className="wrap-texts" data-aos="zoom-in-left" data-aos-offset="50">
                                                                         <h4>Humble Beginnings on Kirinyaga Road, Nairobi</h4>
                                                                         <p>The seed of Kirinyaga Flour Mills is planted. Initially located on Kirinyaga Road, the company catered primarily to the Asian community, which dominated the area at the time. This marked the start of a journey dedicated to providing quality flour to the people of Nairobi.</p>
                                                              </div>
                                                 </div>

                                                 <div className="about-body-wrap">
                                                              <h2 data-aos="zoom-in-right">1998</h2>
                                                              <span className="separator">
                                                                        <span className="line" data-aos="fade-right"></span>
                                                                        <span className="icon" data-aos="zoom-in"><FaRegCircleDot /></span>
                                                                        <span className="line" data-aos="fade-left"></span>
                                                              </span>
                                                              <div className="wrap-texts" data-aos="zoom-in-left">
                                                                         <h4>A Shift in Demographics, Relocation to Tom Mboya Street (Khoja)</h4>
                                                                         <p>We relocated to Khoja, on Tom Mboya Street. This move signified a pivotal moment, as the company's customer base expanded to include the indigenous Kenyan community. This period was characterized by adapting to a new demographic and established roots within a broader market.</p>
                                                              </div>
                                                 </div>

                                                 <div className="about-body-wrap">
                                                              <h2 data-aos="zoom-in-right">2004</h2>
                                                              <span className="separator">
                                                                        <span className="line" data-aos="fade-right"></span>
                                                                        <span className="icon" data-aos="zoom"><FaRegCircleDot /></span>
                                                                        <span className="line" data-aos="fade-left"></span>
                                                              </span>
                                                              <div className="wrap-texts" data-aos="zoom-in-left">
                                                                         <h4>Incorporation and Formalization</h4>
                                                                         <p>We formally incorporated as a private limited company, solidifying our position in the Kenyan food manufacturing and processing industry. This step marked a period of growth and increased organization.</p>
                                                              </div>
                                                 </div>

                                                 <div className="about-body-wrap">
                                                              <h2 data-aos="zoom-in-right">2019</h2>
                                                              <span className="separator">
                                                                        <span className="line" data-aos="fade-right"></span>
                                                                        <span className="icon" data-aos="zoom-in"><FaRegCircleDot /></span>
                                                                        <span className="line" data-aos="fade-left"></span>
                                                              </span>
                                                              <div className="wrap-texts" data-aos="zoom-in-left">
                                                                         <h4>Strategic Relocation to Krishna Mansion</h4>
                                                                         <p>We moved to Krishna Mansion, Mokhtar Daddah Street. This proved highly beneficial, leading to increased sales revenue and service delivery. The new location's safety, accessibility, and proximity to Jevanjee Gardens attracted both existing and new customers. This period highlighted the company's ability to adapt and thrive in a dynamic urban environment.</p>
                                                              </div>
                                                 </div>

                                                 <div className="about-body-wrap">
                                                              <h2 data-aos="zoom-in-right">Present Day</h2>
                                                              <span className="separator">
                                                                        <span className="line" data-aos="fade-right"></span>
                                                                        <span className="icon" data-aos="zoom-in"><FaRegCircleDot /></span>
                                                                        <span className="line" data-aos="fade-left"></span>
                                                              </span>
                                                              <div className="wrap-texts" data-aos="zoom-in-left">
                                                                         <h4>A Legacy of Quality and Community.</h4>
                                                                         <p>We continue to serve Nairobi and other parts of the country, building on a legacy of providing high-quality flour and customized solutions to its diverse customer base. The company stands as a testament to resilience, adaptation, and  a deep understanding of the Kenyan market.</p>
                                                              </div>
                                                 </div>
                                    </div>

                                    <Statements />
                        </div>
              </div>
    </div>
  )
}

export default AboutBody