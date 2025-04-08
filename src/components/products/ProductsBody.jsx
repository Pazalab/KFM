import { useState } from "react"
import { products } from "../../data/products"

const ProductsBody = () => {
    const [active, setActive ] = useState("All");

    const switchCategory = (param) => {
           setActive(param)
    }
  return (
    <div className="products-body">
              <div className="inner-row">
                         <div className="products-body-content">
                                      <div className="products-tabs">
                                                   <ul>
                                                              <li data-aos="zoom-in" onClick={() => switchCategory("All")} className={ active === "All" ? "active" : ""}>All</li>
                                                              {
                                                                   [...new Set(products.map(item => item.category))].map(kitu =>
                                                                     <li data-aos="zoom-in" onClick={() => switchCategory(`${kitu}`)} className={active === kitu ? "active" : ""} key={kitu}>{kitu}</li>)
                                                              }
                                                   </ul>
                                      </div>
                                      <div className="products-row">
                                                 { active === "All" ? 
                                                         products.map(item => 
                                                                 <div className="product-moja" key={item.id} data-aos="zoom-in">
                                                                           <div className="image-section">
                                                                                    <img src={item.image} alt={`Product photo for ${item.name}`} />
                                                                           </div>
                                                                           <h3>{item.name}</h3>
                                                                 </div>
                                                         )
                                                    :
                                                        products.filter(item => item.category === active).map(item => 
                                                                <div className="product-moja" key={item.id} data-aos="zoom-in">
                                                                           <div className="image-section">
                                                                                    <img src={item.image} alt={`Product photo for ${item.name}`} />
                                                                           </div>
                                                                           <h3>{item.name}</h3>
                                                                </div>
                                                        )
                                                }
                                      </div>
                         </div>
              </div>
    </div>
  )
}

export default ProductsBody