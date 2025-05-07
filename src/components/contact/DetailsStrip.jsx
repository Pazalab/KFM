import location from "../../assets/location.png"
import telephone from "../../assets/telephone.png"
import email from "../../assets/open-email.png"
const DetailsStrip = () => {
  return (
    <div className="details-strip">
              <div className="inner-row">
                       <div className="details-strip-row">
                                <div className="detail-moja" data-aos="zoom-in">
                                             <img src={location} alt="" />
                                             <h3>Address</h3>
                                             <p>Krishna Mansion, Mokhtar Daddah Street - Nairobi, Kenya</p>
                                </div>
                                <div className="detail-moja" data-aos="zoom-in">
                                            <img src={telephone} alt="" />
                                            <h3>Phone</h3>
                                            <p>+254 712-475-566</p>
                                            <p>+254 707-623-670</p>
                                </div>
                                <div className="detail-moja" data-aos="zoom-in">
                                        <img src={email} alt="" />
                                        <h3>E-Mail</h3>
                                        <p>support@kirinyagaflourmills.com</p>
                                </div>
                       </div>
              </div>
    </div>
  )
}

export default DetailsStrip