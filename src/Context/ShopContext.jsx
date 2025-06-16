import data from '../Components/Assets/collection'
import react,{createContext, useState} from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart ={};
    for(let index=0; index < data.length; index++){
        cart[index] = 0;
    }
    return cart;
}
 const ShopContextProvider = (props) =>{
    const[cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) =>{
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemId] + 1}))
    }

        const removeFromCart = (itemId) =>{
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemId] - 1}))
    }
    const getCartTotal =()=>{
        let total = 0;
        for(const item in cartItems) {
            if(cartItems[item]>0) {
                let itemInfo = data.find((prod)=> prod.id === Number(item));
                total += itemInfo.new_price * cartItems[item]
            }
        }
         return total;
    }
    const getCartCount = () =>{
        let count = 0;
        for(const item in cartItems){
            if(cartItems[item]>0) {
                count+= cartItems[item]
            }
        }
        return count;
    }
    const contectValue = {data,cartItems, addToCart,removeFromCart,getCartTotal,getCartCount};

    return (
    <ShopContext.Provider value={contectValue}>
        {props.children}
    </ShopContext.Provider>
    )
 }

 export default ShopContextProvider;
