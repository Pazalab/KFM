import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import BenefitsSection from "../components/home/BenefitsSection"
import HeroSection from "../components/home/HeroSection"
import ServiceSection from "../components/home/ServiceSection"
import TestimonialsSection from "../components/home/TestimonialsSection"
import "../css/home.css"

const Home = () => {
  return (
    <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <BenefitsSection />
            <TestimonialsSection />
            <CallToAction />
            <Footer />
    </>
  )
}

export default Home