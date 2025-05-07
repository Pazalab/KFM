import React from 'react'
import { GoCheckCircleFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { MdOutlineWhatsapp } from "react-icons/md";
const CallToAction = () => {
  return (
    <div className='call-to-action'>
              <div className="inner-row">
                          <div className="call-to-action-content">
                                     <div className="call-to-action-column">
                                                <h2>Try Our Flour Products Today and Experience the Difference in Every Scoop.</h2>
                                                <div className="highlights">
                                                           <p><span><GoCheckCircleFill /></span>Delicious, high-quality, and trustworthy nutrition</p>
                                                           <p><span><GoCheckCircleFill /></span>Timeless wholesome goodness in every cup</p>
                                                </div>
                                     </div>
                                     <div className="call-to-action-column">
                                               <p>At Kirinyaga Flour Mills, we’re more than a brand—we’re a part of your family’s journey to health and great taste. From nutrient-rich flours to wholesome porridge mixes and natural supplements, we provide quality and nutrition you can trust. Join generations who rely on us for consistency and goodness in every meal.</p>
                                               <Link to={"https://wa.me/254707623670"} target='_blank'><span><MdOutlineWhatsapp /></span> Place an Order</Link>
                                     </div>
                          </div>
              </div>
    </div>
  )
}

export default CallToAction