import react, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";
import { useEffect, useState } from 'react';

const Product = () => {
const [collection, setCollection] = useState({});
    const {productId} = useParams();
    console.log(productId,"pd")

useEffect(() => {
  if (!productId) return;

  fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(data => {
      setCollection(data);
    })
}, [productId]);


    return (
        <div>
            { collection &&
            <><Breadcrumb product={collection} />
            <ProductDisplay product={collection} />
            <DescriptionBox />
            <RelatedProducts /></>
}
        </div>
    )
};

export default Product;