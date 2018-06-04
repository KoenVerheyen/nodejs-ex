import React from 'react'
import {mount} from 'enzyme'
import {MemoryRouter, Route} from 'react-router-dom'
import RadRoutingComponent from "../RadRoutingComponent";

describe('Routing', () => {

    test('query', () => {
        let wrapper = mount(<MemoryRouter initialEntries={['/rad/query']}><Route path='/rad' component={RadRoutingComponent}/></MemoryRouter>)

        expect(wrapper.find('div').length).toEqual(1)
    })

    test('404', () => {
        let wrapper = mount(<MemoryRouter initialEntries={['/rad/dummy']}><Route path='/rad' component={RadRoutingComponent}/></MemoryRouter>)

        expect(wrapper.find('QueryComponent').length).toEqual(0)
        let alert = wrapper.find('Alert')
        expect(alert.length).toEqual(1)
        expect(alert.props().message).toEqual('Page not found')
    })
})