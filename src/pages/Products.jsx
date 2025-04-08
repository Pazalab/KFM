import CallToAction from "../components/common/CallToAction"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import FaqSection from "../components/products/FaqSection"
import ProductsBody from "../components/products/ProductsBody"
import ProductsHero from "../components/products/ProductsHero"
import "../css/product.css"
const Products = () => {
  return (
    <>
           <Navbar />
           <ProductsHero />
           <ProductsBody />
           <FaqSection />
           <CallToAction />
           <Footer />
    </>
  )
}

export default Products