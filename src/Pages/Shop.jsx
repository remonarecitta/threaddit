import react from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offers/Offer";
import Collections from "../Components/Collections/Collections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
<div id="collections">
  <Collections />
</div>
            <NewsLetter/>
        </div>
    )
};

export default Shop;