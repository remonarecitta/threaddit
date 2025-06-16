import { useContext, useEffect, useState } from "react";
import './styles/ShopCategory.css';
import Item from "../Components/Item/Item";
import arrow from '../Components/Assets/down-arrow.png';

const ShopCategory = (props) => {

 const [data,setData] = useState([]);

useEffect(() =>{
if(props.category === "men"){
fetch('https://dummyjson.com/products/category/mens-shirts')
.then(res => res.json())
.then(data => setData(data.products))
}
else if(props.category === "women"){
fetch('https://dummyjson.com/products/category/womens-dresses')
.then(res => res.json())
.then(data => setData(data.products))
}
else{
fetch('https://dummyjson.com/products/category/sunglasses')
.then(res => res.json())
.then(data => setData(data.products))
}
},[props.category])

    return (
        <div className="shop-category">
            <img className='banner' src={props.banner}/>
            <div className="shopcategory-indexsort">
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
             <div className="shopcategory-sort">
                Sort by <img src={arrow}/>
             </div>
            </div>
             <div className="shopcategory-products">
            {data.map((item, i)=>{
            return <Item key={item.id} id={item.id} brand={item.brand} name={item.title} image={item.thumbnail} new_price={item.price} discountPercentage={item.discountPercentage}/>
            })}
             </div>
             <div className="load-more">
                Load More
             </div>
        </div>
    )
};

export default ShopCategory;