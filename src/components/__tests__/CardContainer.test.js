import React from "react";
import { mount } from 'enzyme'
import Hero from "../Hero";
import Card from "../Card";

let wrapped;

beforeEach(() => {
    wrapped = mount(<Hero/>)
})

afterEach(() => {
    wrapped.unmount()
})

it('has 6 shoe cards in total', () => {
    expect(wrapped.find('.card').length).toEqual(6)
})