import image from "../../assets/statement.jpg"
const Statements = () => {
  return (
    <div className="statements-row">
               <div className="statement-image">
                        <img src={image} alt="" />
               </div>
               <div className="statement-texts">
                           <div className="statement-box">
                                        <h4>Mission</h4>
                                        <p><span>Our mission is be your preferred choice for health and nutrition—today and for generations to come. </span>Through unwavering quality, innovation, and a deep-rooted passion for well-being, we strive to nourish communities with wholesome, nutritious products that stand the test of time. Our goal is not just to feed, but to <span>fuel healthier lives, enrich traditions, and creating a lasting legacy of trust and excellence.</span></p>
                           </div>
                           <div className="statement-box">
                                        <h4>Vision</h4>
                                        <p><span>Our vision is shape a healthier, nourished future by becoming the most trusted and preferred flour brand and food products</span>—championing quality, sustainability, and wellness for every family, across every generation.</p>
                           </div>
               </div>
    </div>
  )
}

export default Statements