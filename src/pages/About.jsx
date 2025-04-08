import AboutBody from "../components/about/AboutBody"
import AboutHero from "../components/about/AboutHero"
import ValuesSection from "../components/about/ValuesSection"
import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import TestimonialsSection from "../components/home/TestimonialsSection"
import "../css/about.css"

const About = () => {
  return (
    <>
          <Navbar />
          <AboutHero />
          <AboutBody />
          <ValuesSection />
          <TestimonialsSection />
          <CallToAction />
          <Footer />
    </>
  )
}

export default About