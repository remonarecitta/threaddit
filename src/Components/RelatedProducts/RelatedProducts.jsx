import './RelatedProducts.css';

const RelatedProducts = () =>{
   
return (
    <div className="RelatedProducts">
        <h1>Related Items</h1>
        <hr/>
        <div className='related-product-item'>
        {/* {data.map((item, i) =>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })} */}
        </div>
    </div>
)
}

export default RelatedProducts;