import './ShopProduct.css';

export default function ShopProduct({ product, page }) {
  return (
    <div className="product-cont">
        {page === product.index ? 
        <div className="product-overlay">
          <div className="product-header">{product.header}</div>
          <div className="product-description">{product.description}</div>
          <div className="product-price">Rp {product.price} 
            <img alt="" className="product-btn" src='/return.png' style={{ transform: 'scaleX(-1)'}} />
          </div>
        </div> : ''}
      <img src={product.source} className="scroll-img" alt=''/>
    </div>
  )
}