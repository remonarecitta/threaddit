import './Offer.css'
import offer from '../Assets/offer.png';

const Offer = () =>{
return (
    <div className="offers">
        <div className='offers-left'>
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <a href='#collections'><button>Click Now</button></a>
        </div>
         <div className='offers-right'>
            <img src={offer} alt='img'/>

        </div>
    </div>
)
}

export default Offer;