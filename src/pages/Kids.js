import React from 'react'
import style from '../CSS/Kids.module.css'
import Item from './Item'
function Kids() {
   const items=[
    {src:"/mens images/1.jfif",name :"",aprice:3000,oprice:1500,discount:50, id:"pro-37"},
    {src:"/mens images/2.jfif",name :"",aprice:800,oprice:600,discount:25, id:"pro-38"},
    {src:"/mens images/3.jfif",name :"",aprice:3000,oprice:1500,discount:50, id:"pro-39"},
    {src:"/mens images/4.jfif",name :"",aprice:1200,oprice:800,discount:33.3, id:"pro-40"},
    {src:"/mens images/5.jfif",name :"",aprice:1000,oprice:500,discount:50, id:"pro-41"},
    {src:"/mens images/6.webp",name :"",aprice:1000,oprice:500,discount:50, id:"pro-42"},
    {src:"/mens images/7.webp",name :"",aprice:800,oprice:600,discount:25, id:"pro-43"},
    {src:"/mens images/8.avif",name :"",aprice:1200,oprice:800,discount:33.3, id:"pro-44"},
    {src:"/mens images/9.jpg",name :"",aprice:900,oprice:600,discount:33.33, id:"pro-45"},
    {src:"/mens images/10.avif",name :"",aprice:3000,oprice:1500,discount:50, id:"pro-46"},
    {src:"/mens images/11.jfif",name :"",aprice:1000,oprice:500,discount:50, id:"pro-47"},
    {src:"/mens images/12.jfif",name :"",aprice:800,oprice:600,discount:25, id:"pro-48"},
   ]
  return (
    <div className={style.Kids}>
        {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  )
}

export default Kids
