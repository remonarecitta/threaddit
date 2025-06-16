import './ProductDisplay.css';
import star from '../Assets/star.jpg';
import { useContext, useState } from 'react';

const ProductDisplay = (props) => {
    const {product} = props;
    const [quantity, setQuantity] = useState(0);
    const [selectedSize, setSelectedSize] = useState('');

    const addToCart= (id) => {
  fetch('https://dummyjson.com/carts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 1,
    products: [
      {
        id:id
      }
    ]
  })
})
.then(res => res.json())
.then(console.log);

    }

  if (!product?.images?.length || !product?.thumbnail) {
    return <div>Loading product visuals...</div>;
  }

return (        
<div className="ProductDisplay">
     
<div className="left">
    <div className="left-img">
        <img src={product?.images[0]}/>
        <img src={product?.images[1]}/>
        <img src={product?.images[2]}/>
        <img src={product?.images[3]}/>
    </div>
    <div className='prodDisp-img'>
        <img className='main-img' src={product?.thumbnail}/>
    </div>
    </div>
<div className="right">
    <h1>{product.title}</h1>
    <div className='right-star'>
        <img src={star}/>
        <p>({product.rating})</p>
    </div>
    <div className='right-prices'>
           <div className='right-price-new'>
            ${product.price}
         </div>
         <div className='right-price-old'>
            {product.discountPercentage}% OFF
         </div>
          <div className='availability' style={{color: product.availabilityStatus === "In Stock"? "green" : "red"}}>
            {product.availabilityStatus}
         </div>
    </div>
    <div className='description'>
      {product.description}
    </div>
   <div className='size'>
  <h3>Select Size</h3>
  <div className='sizes'>
    {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
      <div
        key={size}
        className={`size-box ${selectedSize === size ? "selected" : ""}`}
        onClick={() => setSelectedSize(size)}
      >
        {size}
      </div>
    ))}
  </div>
</div>
    <div className='size'>
        <h3>Select Quantity</h3>
        <div>
             <select className='quantity'
    value={quantity}
    onChange={(e) => setQuantity(Number(e.target.value))}
  >
    {[...Array(10).keys()].map((x) => (
      <option key={x + 1} value={x + 1}>
        {x + 1}
      </option>
    ))}
  </select>
        </div>
    </div>
    <button className='add-cart' onClick={() => addToCart(product.id)}>ADD TO CART</button>
    <p className='right-category'><span>Category:</span> {product?.category}</p>
        <p className='right-category'><span>Tags:</span> {product?.tags}</p>

    </div>
</div>
    )
}

export default ProductDisplay;