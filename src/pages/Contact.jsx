import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import ContactBody from "../components/contact/ContactBody"
import ContactHero from "../components/contact/ContactHero"
import DetailsStrip from "../components/contact/DetailsStrip"
import "../css/contact.css"
const Contact = () => {
  return (
    <>
           <Navbar />
           <ContactHero />
           <DetailsStrip />
           <ContactBody />
           <Footer />
    </>
  )
}

export default Contact