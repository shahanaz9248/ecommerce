import React, { useState, useEffect } from "react";
import style from "../CSS/Header.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../pages/CartContext";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

function Header() {
  const [menu, setMenu] = useState("Shop");
  const { cart, logState } = useCart();
  const [logButton, setLogButton] = useState('Login')
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(logState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); 
      setLogButton('LogOut')
    });

    return () => unsubscribe(); 
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); 
    setLogButton('Login')
  };


  return (
    <div className={style.navBar}>
      <div className={style.logo}>
        <img
          src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
          width="50"
          height="50"
          alt="logo"
        />
      </div>
      <ul className={style.links}>
        <li onClick={() => setMenu("Shop")}>
          <Link className={style.link} to="/">Shop</Link>
          {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Mens")}>
          <Link className={style.link} to="/mens">Mens</Link>
          {menu === "Mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Womens")}>
          <Link className={style.link} to="/womens">Womens</Link>
          {menu === "Womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Kids")}>
          <Link className={style.link} to="/kids">Kids</Link>
          {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className={style.login}>
        <button
          style={{
            fontSize: "large",
            padding: "5px 10px",
            background: "#f64f59",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          <Link to="/login" className={style.link} onClick={() => {
            if (logButton === "LogOut") {
                  handleLogout()
            } else {
              navigate("/login");
              
            }
          }}>
            {logButton}
          </Link>
        </button>
        <div className={style.cart}>
          <Link to="/cart">
            <img
              src="/trolley.png"
              width="40"
              height="40"
              alt="cart"
              style={{ mixBlendMode: "multiply" }}
            />
          </Link>
          <div className={style.cartCount}>{cart.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
