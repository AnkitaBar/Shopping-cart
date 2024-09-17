import React from 'react'
import './Cart.css'
const Card = ({item,handleClick}) => {
    const {title,author,price,img} = item;
  return (
    <div className="cards">
    <div className='image_box'>
      <img src={img} />
    </div>
    <div className='details'>
        <p>{title}</p>
        <p>{author}</p>
        <p>Price : {price}</p>
        <button onClick={()=>handleClick(item)}>Add To Cart</button>
    </div>
    </div>
  )
}

export default Card
