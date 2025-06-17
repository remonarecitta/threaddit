import { useContext, useEffect,useState } from 'react';
import './CartItem.css';
import remove from '../Assets/cross.png';

const CartItem = () =>{
const [cart,getCart] = useState([])
const userId = localStorage.getItem('userId');

useEffect(() =>{
fetch(`https://dummyjson.com/carts/1`)
.then(res => res.json())
.then(data => getCart(data))
},[])

const removeFromCart = (id) =>{
fetch(`https://dummyjson.com/carts/1`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    merge: true,
    products: [
      {
        id: id,
        quantity: 0,
      },
    ]
  })
})
.then(res => res.json())
.then(data => getCart(data));
}

return (
    <div className='CartItem'>
         <div className='main'>
            <p>Products</p>
              <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                  <p>Total</p>
                    <p>Remove</p>
         </div>
         <hr/>
        {cart?.products?.map((e)=>{
                return  <div>
            <div className='format main'>
                <img src={e.thumbnail} className='prod-icon'/>
                <p>{e.title}</p>
                 <p>${e.price}</p>
                 <button className='quantity'>{e.quantity}</button>
                  <p>${Math.floor(e.total)}</p>
                  <div className='remove'>
                  <img src={remove} onClick={() => {removeFromCart(e.id)}}/>
                  </div>
            </div>
            <hr/>
         </div>
            
            return null;
        })}
        <div className='cart-down'>
            <div className='total'>
            <h1>Cart Total</h1>
        <div>
            <div className='total-item'>
            <p>SubTotal</p>
            <p>${Math.floor(cart.discountedTotal)}</p>
            </div>
            <hr/>
            <div className='total-item'>
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr/>
            <div className='total-item'>
            <h3>Total</h3>
            <h3>${Math.floor(cart.discountedTotal)}</h3>
            </div>
        </div>
        <button>Proceed to Checkout</button>
        </div>
        <div className='promocode'>
            <p>Enter your promo code here</p>
            <div className='promobox'>
            <input type='text' placeholder='promo code'/>
            <button>Submit</button>
            </div>

    </div>
    </div>
    </div>
)
}

export default CartItem;