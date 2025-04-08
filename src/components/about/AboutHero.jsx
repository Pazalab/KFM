import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"

const AboutHero = () => {
  return (
    <div className="about-hero">
             <div className="inner-row">
                       <div className="about-hero-content">
                                  <div className="about-hero-texts">
                                              <h1 data-aos="fade-down">About Kirinyaga Flour Mills</h1>
                                              <h3 data-aos="fade-up">From Our Mill to Your Table: Goodness You Can Taste.</h3>
                                              <p data-aos="zoom-in-up">We've been a trusted name in Kenyan kitchens for generations. We're passionate about crafting delicious and nutritious flours, blending different grains to create unique flavors and textures that cater to every palate. We're always looking for ways to innovate, introducing new and exciting products that align with the evolving health needs of our customers.</p>
                                              <p data-aos="zoom-in-up">We believe in building long-lasting relationships with our customers. That's why we go the extra mile, offering customized orders to meet your specific needs. We're proud to be a part of your family's culinary journey, from generation to generation.</p>
                                  </div>

                                  <div className="about-hero-images">
                                              <img data-aos="fade-right" data-aos-offset="-100" src={about1} alt="" />
                                              <img data-aos="fade-left" src={about2} data-aos-offset="-100" alt="" />
                                  </div>
                       </div>
             </div>
    </div>
  )
}

export default AboutHero