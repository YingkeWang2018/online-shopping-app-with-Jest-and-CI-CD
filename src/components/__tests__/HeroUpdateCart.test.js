import React from "react";
import { mount } from 'enzyme'
import Hero from "../Hero";
import CardInfo from "../CardInfo";
import ShoppingCartContainer from "../ShoppingCartContainer";

let wrapped;
let shoe1, shoe2;

beforeEach(() => {
    wrapped = mount(<Hero/>)
    shoe1 = (wrapped.find('.card')).at(0)
    shoe2 = (wrapped.find('.card')).at(1)
})

afterEach(() => {
    wrapped.unmount()
})

it('can add one item', () => {
   shoe1.find(CardInfo).find('button').simulate('click');
   wrapped.update();
   let shoppingCartContainerWrapped = wrapped.find(ShoppingCartContainer)
   const totalPrice = shoppingCartContainerWrapped.prop('totalPrice');
   const itemCount = shoppingCartContainerWrapped.prop('itemCount');
   const cartItems = shoppingCartContainerWrapped.prop('cartItems').length;
   expect(totalPrice).toEqual(699);
   expect(itemCount).toEqual(1);
   expect(cartItems).toEqual(1);
})

it('can add two same items', () => {
    shoe1.find(CardInfo).find('button').simulate('click');
    shoe1.find(CardInfo).find('button').simulate('click');
    wrapped.update()
    let shoppingCartContainerWrapped = wrapped.find(ShoppingCartContainer)
    const totalPrice = shoppingCartContainerWrapped.prop('totalPrice');
    const itemCount = shoppingCartContainerWrapped.prop('itemCount');
    const cartItems = shoppingCartContainerWrapped.prop('cartItems').length;
    expect(totalPrice).toEqual(1398);
    expect(itemCount).toEqual(2);
    expect(cartItems).toEqual(1);

})

it('can add two different items', () => {
    shoe1.find(CardInfo).find('button').simulate('click');
    shoe2.find(CardInfo).find('button').simulate('click');
    wrapped.update()
    let shoppingCartContainerWrapped = wrapped.find(ShoppingCartContainer)
    const totalPrice = shoppingCartContainerWrapped.prop('totalPrice');
    const itemCount = shoppingCartContainerWrapped.prop('itemCount');
    const cartItems = shoppingCartContainerWrapped.prop('cartItems').length;
    expect(totalPrice).toEqual(1298);
    expect(itemCount).toEqual(2);
    expect(cartItems).toEqual(2);

})

