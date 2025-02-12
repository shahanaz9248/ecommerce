import { createContext, useState, useContext } from "react";


const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [logState,setLogState]=useState(false)

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); 
  };

  const removeFromCart=(id)=>{
    setCart((prevCart)=>prevCart.filter((item) => item.id !== id))
  }

  const log=(l)=>{
      if(l){
          setLogState(true)
      }
  }


  return (
    <CartContext.Provider value={{ cart, addToCart ,removeFromCart,log,logState}}>
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  return useContext(CartContext);
}
