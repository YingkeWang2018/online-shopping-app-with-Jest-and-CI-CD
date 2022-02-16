import React, {useState} from "react";

const CouponContainer = ({setDiscount}) => {
    const [couponCode, setCouponCode] = useState("")
    const updateCouponCode = (e) => {
        if (e.target !== null) {
        setCouponCode(e.target.value)}
    }
    return (
        <div className= "couponContainer">
            <input type="text" onChange={updateCouponCode} placeholder= "Enter Coupon Code"/>
            <button onClick={() => setDiscount(couponCode)}><h3> Apply </h3></button>
        </div>
    )
}
export default CouponContainer