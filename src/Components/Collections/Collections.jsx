import './Collections.css';
import Item from '../Item/Item';
import { useEffect, useState } from 'react';

const Collections = () =>{

const [collection, setCollection] = useState([]);

useEffect(() =>{
fetch('https://dummyjson.com/products?limit=8')
.then(res => res.json())
.then(data => setCollection(data.products))
},[])

    return (
        <div className='collection'>
     <h1>LATEST COLLECTIONS</h1>
    <hr/>
    <div className='collection-item'>
        {collection?.map((item) => {
            return <Item key={item.id} id={item.id} brand={item.brand} name={item.title} image={item.thumbnail} new_price={item.price} discountPercentage={item.discountPercentage}/>
        })}

    </div>
    </div>
    )
}

export default Collections;