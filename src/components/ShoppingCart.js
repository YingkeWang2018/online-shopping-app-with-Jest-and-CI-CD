import React from "react";

const ShoppingCart = ({cartItems, removeItem}) => {
    return (<div className="shoppingCart">
        {cartItems.map(item => (<div key = {item.id} className="cardRow">
            <div className="cardImg">
                <p>x {item.cartCount}</p>
                <img src={item.img} alt="shoe"/>
            </div>
            <div className="cardPrice">
                <p>${item.price}</p>
                <i onClick={() => removeItem(item.id)} className="fas fa-times"> </i>
            </div>
        </div>))}
    </div>)
}
export default ShoppingCart