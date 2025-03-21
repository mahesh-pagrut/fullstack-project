import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

const FoodItem = ({id,name,price,description,image}) => {
    const [itemCount, setItemCount] = useState(0)
  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={image} alt='food-image'/>
            {!itemCount
            ?<img className='add' onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_white} alt='add-icon-white'/>
            :<div className='food-item-counter'>
                <img  onClick={() => setItemCount(prev => prev - 1)} src={assets.remove_icon_red} alt='remove icon'/>
                <p>{itemCount}</p>
                <img  onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_green}/>
            </div>
            }
        </div>
        <div className='food-item-info'>
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt='image-food-rating'/>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem