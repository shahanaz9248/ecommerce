import React from 'react'
import style from '../CSS/Mens.module.css'
import Item from './Item'
function Mens() {
  const items=[

    {src:"/mens images/1.jfif",name:"",aprice:3000, oprice:1500, discount:50 ,id:"pro-13"},
    {src:"/mens images/2.jfif",name:"",aprice:800, oprice:600, discount:25 ,id:"pro-14"},
    {src:"/mens images/3.jfif",name:"",aprice:3000, oprice:1500, discount:50 ,id:"pro-15"},
    {src:"/mens images/4.jfif",name:"",aprice:1200, oprice:800, discount:33.3 ,id:"pro-16"},
    {src:"/mens images/5.jfif",name:"",aprice:1000, oprice:500, discount:50 ,id:"pro-17"},
    {src:"/mens images/6.webp",name:"",aprice:1000, oprice:500, discount:50 ,id:"pro-18"},
    {src:"/mens images/7.webp",name:"",aprice:800, oprice:600, discount:25 ,id:"pro-19"},
    {src:"/mens images/8.avif",name:"",aprice:1200, oprice:800, discount:33.3 ,id:"pro-20"},
    {src:"/mens images/9.jpg",name:"",aprice:900, oprice:600, discount:33.33 ,id:"pro-21"},
    {src:"/mens images/10.avif",name:"",aprice:3000, oprice:1500, discount:50 ,id:"pro-22"},
    {src:"/mens images/11.jfif",name:"",aprice:1000, oprice:500, discount:50 ,id:"pro-23"},
    {src:"/mens images/12.jfif",name:"",aprice:800, oprice:600, discount:25 ,id:"pro-24"}
  ]
  return (
    <div className={style.Mens}>
            {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  )
}

export default Mens
