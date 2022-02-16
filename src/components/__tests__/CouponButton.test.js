import React from "react";
import { mount } from 'enzyme'
import Hero from "../Hero";
import CardInfo from "../CardInfo";
import ShoppingCartContainer from "../ShoppingCartContainer";
import TotalPrice from "../TotalPrice";

let wrapped;
let shoppingCartContainerWrapped, CouponContainerWrapped;

beforeEach(() => {
    wrapped = mount(<Hero/>)
    let shoe1 = (wrapped.find('.card')).at(0)
    let shoe2 = (wrapped.find('.card')).at(1)
    shoe1.find(CardInfo).find('button').simulate('click');
    shoe1.find(CardInfo).find('button').simulate('click');
    shoe2.find(CardInfo).find('button').simulate('click');
    wrapped.update()
    shoppingCartContainerWrapped = wrapped.find(ShoppingCartContainer)
    CouponContainerWrapped = shoppingCartContainerWrapped.find(".couponContainer")
})

afterEach(() => {
    wrapped.unmount()
})

it('can toggle on apply correct coupon', () => {
    expect(shoppingCartContainerWrapped.prop('totalPrice')).toEqual(1997)
    CouponContainerWrapped.find('input').simulate('change', {target: {value: "JA3sML"}})
    let applyButton = CouponContainerWrapped.find('button')
    wrapped.update()
    applyButton.simulate('click')
    wrapped.update()
    expect(shoppingCartContainerWrapped.find(TotalPrice).find('h2').text()).toContain('1598')
})

it('is correct on applying invalid coupon', () => {
    expect(shoppingCartContainerWrapped.prop('totalPrice')).toEqual(1997)
    CouponContainerWrapped.find('input').simulate('change', {target: {value: "hdieod"}})
    let applyButton = CouponContainerWrapped.find('button')
    wrapped.update()
    applyButton.simulate('click')
    wrapped.update()
    expect(shoppingCartContainerWrapped.find(TotalPrice).find('h2').text()).toContain('1997')
})

it('can toggle on apply correct coupon when click apply button twice', () => {
    expect(shoppingCartContainerWrapped.prop('totalPrice')).toEqual(1997)
    CouponContainerWrapped.find('input').simulate('change', {target: {value: "JA3sML"}})
    let applyButton = CouponContainerWrapped.find('button')
    wrapped.update()
    applyButton.simulate('click')
    wrapped.update()
    applyButton.simulate('click')
    wrapped.update()
    expect(shoppingCartContainerWrapped.find(TotalPrice).find('h2').text()).toContain('1598')
})
