import './Popular.css';
import data from '../Assets/data';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';

const Popular = () =>{
const [collection, setCollection] = useState([]);

useEffect(() =>{
fetch('https://dummyjson.com/products/category/womens-jewellery')
.then(res => res.json())
.then(data => setCollection(data.products))
},[])
return (
    <div className='popular'>
     <h1>POPULAR IN WOMEN</h1>
    <hr/>
    <div className='popular-item'>
        {collection?.map((item) => {
            return <Item key={item.id} id={item.id} brand={item.brand} name={item.title} image={item.thumbnail} new_price={item.price} discountPercentage={item.discountPercentage}/>
        })}

    </div>
    </div>
)
}

export default Popular;