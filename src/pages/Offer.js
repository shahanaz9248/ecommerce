import React from 'react'
import Item from './Item'
import style from '../CSS/Offer.module.css'
function Offer() {
   const items=[
    {src:"/offers images/1.webp", name :"kurti", aprice:1000 ,oprice:900, discount:10, id:"pro-1"},
    {src:"/offers images/8.avif", name :"", aprice:1200 ,oprice:800, discount:33.3, id:"pro-8"},
    {src:"/offers images/9.jpg", name :"", aprice:900 ,oprice:600, discount:33.33, id:"pro-9"},
    {src:"/offers images/4.jpg", name :"", aprice:1000 ,oprice:700, discount:30, id:"pro-4"},
    {src:"/offers images/5.jpg", name :"", aprice:1400 ,oprice:800, discount:43, id:"pro-5"},
    {src:"/offers images/6.webp", name :"", aprice: 1000,oprice:500, discount:50, id:"pro-6"},
    {src:"/offers images/7.webp", name :"", aprice:800 ,oprice:600, discount:25, id:"pro-7"},
    {src:"/offers images/10.avif", name :"", aprice:3000 ,oprice:1500, discount:50, id:"pro-10"},
    {src:"/offers images/2.jfif", name :"", aprice:2000 ,oprice:1600, discount:20, id:"pro-2"},
    {src:"/offers images/3.webp", name :"", aprice:1500 ,oprice:1200, discount:20, id:"pro-3"},
    {src:"/offers images/11.webp", name :"", aprice:3000 ,oprice:1500, discount:50, id:"pro-11"},
    {src:"/offers images/12.webp", name :"", aprice: 3000,oprice:1500, discount:50, id:"pro-12"},
   ]
  return (
    <div className={style.Offer}>
         {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  )
}

export default Offer
