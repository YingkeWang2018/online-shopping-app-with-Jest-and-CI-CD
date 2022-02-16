import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import CardContainer from "./CardContainer";
import Nav from './Nav'
import Container from "./ReusableComponents/Container";
import ShoppingCartContainer from "./ShoppingCartContainer";
const Hero = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [itemCount, setItemCount] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [hiddenMenu, setHiddenMenu] = useState(false)
    const updateCart = (shoeImg, shoePrice) => {
        setItemCount(prevCount => {return prevCount + 1})
        setTotalPrice(prevPrice => prevPrice + shoePrice)
        if(cartItems.find(item => item.img === shoeImg)){
            const result = cartItems.find(item => item.img === shoeImg)
            result.cartCount ++;
            return
        }
        setCartItems(
            [...cartItems, {img: shoeImg, price: shoePrice, id:uuidv4(), cartCount: 1}]
        )

    }


    const removeItem = (id) => {
        const newItems = cartItems.filter((cartItem) => cartItem.id !== id)
        setCartItems(newItems)
        let newPrice = 0
        let newCount = 0
        let item
        for (let i = 0; i < newItems.length; i++){
            item = newItems[i]
            newPrice += item.cartCount * item.price
            newCount += item.cartCount
        }
        setTotalPrice(newPrice)
        setItemCount(newCount)
    }

    return (
    <section className= "hero">
        <Nav itemCount = {itemCount} hiddenMenu = {hiddenMenu} setHiddenMenu = {setHiddenMenu}/>
        <Container>
            <CardContainer updateCart = {updateCart}/>
            <ShoppingCartContainer hiddenMenu = {hiddenMenu}
            cartItems = {cartItems} totalPrice = {totalPrice} itemCount = {itemCount} removeItem = {removeItem}
            />
        </Container>
    </section>)
}

export default Hero;
