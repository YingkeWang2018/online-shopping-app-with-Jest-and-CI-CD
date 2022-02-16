import React from "react";
import { mount } from 'enzyme'
import Hero from "../Hero";
import CardInfo from "../CardInfo";
import ShoppingCartContainer from "../ShoppingCartContainer";

let wrapped;
let shoppingCartContainerWrapped;

beforeEach(() => {
    wrapped = mount(<Hero/>)
    let shoe1 = (wrapped.find('.card')).at(0)
    let shoe2 = (wrapped.find('.card')).at(1)
    shoe1.find(CardInfo).find('button').simulate('click');
    shoe1.find(CardInfo).find('button').simulate('click');
    shoe2.find(CardInfo).find('button').simulate('click');
    wrapped.update()
    shoppingCartContainerWrapped = wrapped.find(ShoppingCartContainer)
})

afterEach(() => {
    wrapped.unmount()
})

it('can remove item from quantity 1', () => {
    shoppingCartContainerWrapped.find('.cardRow').at(1).find('i').simulate('click')
    wrapped.update()
    shoppingCartContainerWrapped = wrapped.find(ShoppingCartContainer)
    expect(shoppingCartContainerWrapped.prop('cartItems').length).toEqual(1)
    expect(shoppingCartContainerWrapped.prop('itemCount')).toEqual(2)
    expect(shoppingCartContainerWrapped.prop('totalPrice')).toEqual(1398)

})

it('can remove item from quantity more than 1', () => {
    shoppingCartContainerWrapped.find('.cardRow').at(0).find('i').simulate('click')
    wrapped.update()
    shoppingCartContainerWrapped = wrapped.find(ShoppingCartContainer)
    expect(shoppingCartContainerWrapped.prop('cartItems').length).toEqual(1)
    expect(shoppingCartContainerWrapped.prop('itemCount')).toEqual(1)
    expect(shoppingCartContainerWrapped.prop('totalPrice')).toEqual(599)

})





