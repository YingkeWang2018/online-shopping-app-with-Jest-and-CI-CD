import React, {useState} from "react";
import CartImg from "../images/cart.png"


const TotalPrice  = ({totalPrice, itemCount, discount}) => {
    const [includeTax, setIncludeTax]  = useState(false)
    return (

        <div className="shoppingCartPrice">
            <button onClick={() => setIncludeTax(!includeTax)}> {!includeTax? (<h3> Apply Tax</h3>) : (<h3>Exclude Tax</h3>)}</button>
            <h2>
                Total Price: ${!includeTax? Math.round(totalPrice * (1-discount)) : Math.round(totalPrice * 1.13 * (1-discount))}
            </h2>
            <div className= "allCartItems"
            style={{background: `url(${CartImg}) no-repeat center/cover`}}>
                <div className= "itemsAmountWrap">
                    <p>{itemCount}</p>
                </div>
            </div>
        </div>
    )
}
export default TotalPrice