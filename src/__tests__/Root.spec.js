import React from 'react'
import {shallow} from 'enzyme'
import configureMockStore from 'redux-mock-store'
import Root from '../Root'

const mockStore = configureMockStore([])

describe('rendering', () => {

    let oldenv

    beforeEach(() => {
        oldenv = process.env.NODE_ENV
    })

    afterEach(() => {
        process.env.NODE_ENV = oldenv
    })

    test('connected root', () => {
        let store = mockStore({rad: { iam: {connected: true}}})
        let wrapper = shallow(<Root store={store}/>).shallow()

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.length).toEqual(1)


    })

    test('disconnected root', () => {
        let store = mockStore({rad: { iam: {connected: false}}})
        let wrapper = shallow(<Root store={store}/>).shallow()

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.length).toEqual(1)

        let loginPage = wrapper.find('Connect(DevLoginPageComponent)');

        expect(loginPage.length).toEqual(0)
    })

    test('disconnected root in development', () => {
        process.env.NODE_ENV = 'development'
        let store = mockStore({rad: { iam: {connected: false}}})
        let wrapper = shallow(<Root store={store}/>).shallow()

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.length).toEqual(1)
        let loginPage = wrapper.find('Connect(DevLoginPageComponent)');

        expect(loginPage.length).toEqual(1)
    })


})