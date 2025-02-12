import React from 'react'
import style from '../CSS/Poster.module.css'
import { Link } from 'react-router-dom'
function Poster() {
  return (
    <div className={style.Poster}>
        <div className={style.Poster_left}>
           <h1>Exclusive Offers</h1>
            <h4><Link to="/offer" style={{textDecoration:"none",color:"white"}}>Explore---&gt;</Link></h4>
        </div>
        <div className={style.Poster_right}>
             <img src="https://www.libas.in/cdn/shop/files/1_33a25d6e-c493-49fd-9ae7-3e415440e6ee.jpg?v=1736854905" alt=""/>
        </div>   
    </div>
  )
}

export default Poster
