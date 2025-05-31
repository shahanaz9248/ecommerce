import { useCart } from "./CartContext";
import style from '../CSS/Cart.module.css'



function Cart({item}) {
  const { cart } = useCart();
  const {removeFromCart}=useCart()

  return (
    <div className={style.Cart}>
      {cart.length === 0 ?
        <img
          src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg"
          alt="empty"
          width="400" 
        /> 
        : 
        (
          cart.map((item, index) => (
            <div key={index} className={style.item} id={item.id}>
              <img src={item.src} className={style.image} alt={item.name}></img>
              <div className={style.details}>{item.name}{item.oprice}</div>
              <button onClick={()=>removeFromCart(item.id)}>Remove From Cart</button>
            </div>
          ))
        )}
    </div>
  );
}

export default Cart;
