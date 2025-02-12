import React from "react";
import style from "../CSS/Item.module.css";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function Item({ item }) {  
  const { addToCart } = useCart();


  return (
    <div className={style.Item}>
      <Link to="/product" style={{ textDecoration: "none" }} state={item}>
        <img src={item.src} alt="" className={style.ItemImg} id={item.id} />
        <h4 className={style.ItemName}>{item.name}</h4>
      </Link>
      <div className={style.ItemPrice}>
        <span className={style.APrice}><del>&#8377;{item.aprice}</del></span>
        <span className={style.OfferPrice}>&#8377;{item.oprice}</span>
        <span className={style.ItemDiscount}>{item.discount}% off</span>
      </div>
      <div className={style.ItemToCart}>
        <button
          className={style.toCart}
          onClick={() => addToCart(item)} 
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
