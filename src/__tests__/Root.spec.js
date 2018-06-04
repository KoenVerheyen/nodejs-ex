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


})