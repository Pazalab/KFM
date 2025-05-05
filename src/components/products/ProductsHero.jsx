import productImage from "../../assets/productBg.jpg"
const ProductsHero = () => {
  return (
    <div className="products-hero">
                <div className="products-hero-content">
                         <div className="products-hero-image" data-aos="zoom-in-up">
                                    <img src={productImage} alt="" />
                         </div>
                        <div className="product-hero-texts">
                                    <div className="inner-row">
                                                <div className="product-hero-texts-content">
                                                         <h1 data-aos="fade-right">Wholesome Goodness in Every Scoop.</h1>
                                                         <p data-aos="fade-left">From nourishing porridge flours to bold, aromatic spices and natural supplements, Kirinyaga Flour Mills offers more than just flour—we deliver a complete pantry of wellness. Each product is crafted with care to bring you authentic flavor, trusted nutrition, and the kind of quality that generations rely on. Your health, your taste, your tradition—<span>all in one place.</span></p>
                                                </div>
                                    </div>
                        </div>
                </div>
    </div>
  )
}

export default ProductsHero