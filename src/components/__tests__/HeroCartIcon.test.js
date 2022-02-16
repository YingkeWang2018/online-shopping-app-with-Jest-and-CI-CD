import React from "react";
import { mount } from 'enzyme'
import Nav from "../Nav";

import Hero from "../Hero";

let wrapped, shoe1, shoe2;

beforeEach(() => {
    wrapped = mount(<Hero/>)
    shoe1 = (wrapped.find('.card')).at(0)
    shoe2 = (wrapped.find('.card')).at(1)
})

afterEach(() => {
    wrapped.unmount()
})

it('has toggle cart icon ', () => {
    const navWrapped = wrapped.find(Nav)
    const iconWrapped  = navWrapped.find('.menuWrapper')
    expect(iconWrapped.length).toEqual(1);
})

it('cart icon toggle', () => {
    let navWrapped = wrapped.find(Nav)
    let iconWrapped  = navWrapped.find('.menuWrapper')
    iconWrapped.simulate('click')
    wrapped.update()
    navWrapped = wrapped.find(Nav)
    expect(navWrapped.prop('hiddenMenu')).toEqual(true)
})