import React, {useState} from "react";
import ShoppingCart from "./ShoppingCart";
import TotalPrice from "./TotalPrice";
import CouponData from "./CouponData";
import CouponContainer from "./CouponContainer";
const ShoppingCartContainer = (props) => {
    const {hiddenMenu, cartItems, totalPrice, itemCount, removeItem} = props
    const [discount, setDiscount] = useState(0)
    const updateDiscount = (couponCode => {
        if (CouponData.find(coupon => (coupon.code === couponCode.trim()))) {
            const coupon = CouponData.find(coupon => (coupon.code === couponCode.trim()))
            setDiscount(coupon.discount)
        }
        else {
            setDiscount(0)
        }
    })
    return (<div className = {`shoppingCartContainer ${!hiddenMenu? "" :"hidden"}`}>
        <ShoppingCart cartItems = {cartItems} removeItem = {removeItem}/>
        <CouponContainer setDiscount = {updateDiscount} />
        <TotalPrice totalPrice = {totalPrice} itemCount = {itemCount} discount={discount}/>
    </div>)
}
export default ShoppingCartContainer