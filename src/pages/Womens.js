import React from 'react'
import style from '../CSS/Womens.module.css'
import Item from './Item'
function Womens() {
  const items = [
    { src: "/womens images/1.webp", name: "kurti", aprice: 1000, oprice: 900, discount: 10, id:"pro-25" },
    { src: "/womens images/2.jfif", name: "", aprice: 2000, oprice: 1600, discount: 20, id:"pro-26" },
    { src: "/womens images/3.webp", name: "", aprice: 1500, oprice: 1200, discount: 20, id:"pro-27" },
    { src: "/womens images/4.jpg", name: "", aprice: 1000, oprice: 700, discount: 30, id:"pro-28" },
    { src: "/womens images/5.jpg", name: "", aprice: 1400, oprice: 800, discount: 43, id:"pro-29" },
    { src: "/womens images/6.jpg", name: "", aprice: 1400, oprice: 800, discount: 43, id:"pro-30" },
    { src: "/womens images/7.webp", name: "", aprice: 1400, oprice: 800, discount: 43, id:"pro-31" },
    { src: "/womens images/8.webp", name: "", aprice: 1400, oprice: 800, discount: 43, id:"pro-32" },
    { src: "/womens images/9.jfif", name: "", aprice: 1400, oprice: 800, discount: 43, id:"pro-33" },
    { src: "/womens images/10.jpg", name: "", aprice: 1400, oprice: 800, discount: 43, id:"pro-34" },
    { src: "/womens images/11.webp", name: "", aprice: 3000, oprice: 1500, discount: 50, id:"pro-35" },
    { src: "/womens images/12.webp", name: "", aprice: 3000, oprice: 1500, discount: 50, id:"pro-36" },
  ]
  return (
    <div className={style.Womens}>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  )
}

export default Womens
