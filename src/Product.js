import './Product.css'

import { useState } from 'react';

export default function Product({ product }) {
  let [isHovered, setHover] = useState(false);
  function hideHover() {
    setHover(false);
  }
  function showHover() {
    setHover(true);
  }
  return (
    <div className="product-main-cont" onMouseOver={showHover} onMouseLeave={hideHover}>
      {isHovered ? 
      <div className='hover-cont'>
        <div className='add-btn'>Add to cart</div>
        <div className='btns-cont'>
          <div className='hover-btn'>
            <img className='hover-img' src='/share.png' alt=''/>
            Share
          </div>
          <div className='hover-btn'>
            <img style={{width: '35px', height: '35px'}} src='/like.png' alt=''/>
            Like
          </div>
        </div>
      </div>
      : <div className='info-overlay'>
          {product.isNew ? <div className='lbl-new'>New</div> : ''}
          {product.sale ? <div className='lbl-sale'>-{product.sale}%</div> : ''}
        </div>
      }
      <img className="product-image" src={product.source} alt=''/>
      <div className='product-info-container'>
        <div className="product-title">{product.title}</div>
        <div className="product-type">{product.type}</div>
        <div className="product-price-cont">
          <div className="actual-price">
            Rp {product.sale ? product.price - (product.price * product.sale / 100)  : product.price}
          </div>
          {product.sale ? <div className="full-price">Rp {product.price}</div> : ''}
        </div>
      </div>
    </div>
  )
}