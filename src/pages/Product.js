import React from 'react'
import style from '../CSS/Product.module.css'
import { useLocation } from 'react-router-dom';
function Product() {
  const location = useLocation();
  const { src, name, aprice, oprice, discount, id } = location.state || {};
  return (
    <div className={style.Product}>
       <img src={src}className={style.productimg} alt="product" is={id}/>
       <div className={style.productdetails}>
           <p className={style.productName}>{name}</p>
           <p className={style.productData}>this product..............................................................................................................</p>
           <div className={style.priceDetails}><span className={style.OfferPrice}>&#8377;{oprice}</span><span className={style.APrice}><del>&#8377;{aprice}</del></span><span className={style.productDiscount}>{discount}% off</span></div>
       </div>
    </div>
  )
}

export default Product
