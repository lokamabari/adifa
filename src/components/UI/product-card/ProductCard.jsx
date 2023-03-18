import React from 'react'
import { Link } from 'react-router-dom'

import productImg from '../../../assets/images/product_2.1.jpg'

const ProductCard = () => {
  return  <div className='product__item'>
    <div className="product__img">
        <img src={productImg} alt="product-img" />
    </div>

    <div className="product__content">
        <h5><Link>Burger</Link></h5>
        <div>
            <span className="product__price">$24.00</span>
            <button className="addTOCart__btn">Add to cart</button>
        </div>
    </div>
  </div>
  
}

export default ProductCard