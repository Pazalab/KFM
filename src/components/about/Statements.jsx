import image from "../../assets/statement.jpg"
const Statements = () => {
  return (
    <div className="statements-row">
               <div className="statement-image" data-aos="zoom-in-right">
                        <img src={image} alt="" />
               </div>
               <div className="statement-texts">
                           <div className="statement-box" data-aos="zoom-in-left">
                                        <h4>Mission</h4>
                                        {/* <p><span>To be your preferred choice for health and nutrition, today and future generations.</span>Through unwavering quality, innovation, and a deep-rooted passion for well-being, we strive to nourish communities with wholesome, nutritious products that stand the test of time. Our goal is not just to feed, but to <span>fuel healthier lives, enrich traditions, and creating a lasting legacy of trust and excellence.</span></p> */}
                                        <p><span>To be your preferred choice for health and nutrition, today and future generations.</span></p>
                           </div>
                           <div className="statement-box" data-aos="zoom-in-left">
                                        <h4>Vision</h4>
                                        <p><span>To become the most trusted and preferred flour brand, in shaping a healthier lifestyle amongst our current and potential customers.</span> How is this achieved? By creating a legacy of trust, quality and excellence across generations.</p>
                           </div>
               </div>
    </div>
  )
}

export default Statements