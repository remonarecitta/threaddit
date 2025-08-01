import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) =>{
return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt='item'/></Link>
        <h3>{props.brand}</h3>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
            ${props.new_price}
            </div>
            <div className='item-price-old'>
            ({props.discountPercentage}% OFF)
            </div>
        </div>
    </div>
)
}

export default Item;