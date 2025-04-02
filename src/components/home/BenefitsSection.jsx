import benefits from "../../assets/benefits.jpg"

const BenefitsSection = () => {
  return (
    <div className="benefits-section">
              <div className="inner-row">
                        <div className="benefits-content">
                                     <div className="benefits-intro">
                                                <h2 data-aos="fade-right">What Makes Kirinyaga Flour Mills Stand Out?</h2>
                                                <p data-aos="fade-left">We don't just make premium flour—we build trust, deliver quality, and create lasting connections with our customers. For decades, we've been a cornerstone of Kenyan households, providing products that generations rely on. Here's why we're truly in a league of our own:</p>
                                     </div>
                        </div>
              </div>

              <div className="benefits-content-row">
                         <div className="content-column">
                                 <div className="content-box" data-aos="zoom-in-right">
                                           <h3>Unmatched Brand Integrity</h3>
                                           <p>Our name is more than just a label—it’s a symbol of trust, quality, and consistency. For decades, we've built a reputation by adhering to the highest standards in milling, ensuring that every product lives up to the expectations of our customers.</p>
                                 </div>
                                 <div className="content-box" data-aos="zoom-in-right">
                                            <h3>A Tradition of Generational Service</h3>
                                            <p>We're more than a flour mill; we're a part of family traditions. For generations, Kenyan households have relied on our products, creating a bond that spans decades. Today, we proudly serve third-generation customers, continuing to provide the same trusted quality their families have counted on for years.</p>
                                 </div>
                         </div>
                         <div className="content-column" data-aos="zoom-in">
                                   <img src={benefits} alt="" />
                          </div>
                         <div className="content-column">
                                   <div className="content-box" data-aos="zoom-in-left">
                                           <h3>Personalized Customer Experience</h3>
                                           <p>Every customer has unique needs, and at Kirinyaga Flour Mills, we’re dedicated to meeting them. From custom blends to special orders, we go beyond standard solutions to deliver tailored products that ensure satisfaction.</p>
                                   </div>
                                   <div className="content-box" data-aos="zoom-in-left">
                                             <h3>A Reputation Built on Excellence</h3>
                                             <p>From sourcing the finest grains to ensuring every batch of flour meets rigorous quality checks, our dedication to delivering exceptional products never wavers. In a competitive industry, we’ve carved out our place as a trusted leader by consistently exceeding expectations.</p>
                                   </div>
                         </div>
              </div>
    </div>
  )
}

export default BenefitsSection