import React from 'react'
import {shallow} from 'enzyme'
import IdentityFormSelect from "../IdentityFormSelect";

describe('IdentityFormSelect', () => {

    test('basic with no value set', () => {
        let onChange = jest.fn()
        let wrapper = shallow(<IdentityFormSelect
            name='person'
            onSelectChange={onChange}
            elements={[{id: 1, firstName: 'John', lastName: 'Doe'}, {id:2, firstName: 'Jack', lastName: 'Doe'}]}
            getName={(elem) => elem.firstName + ' ' + elem.lastName}
        />)
        expect(wrapper.length).toEqual(1)
        expect(wrapper).toMatchSnapshot()

    })

    test('basic with value set', () => {
        let onChange = jest.fn()
        let wrapper = shallow(<IdentityFormSelect
            name='person'
            value={1}
            onSelectChange={onChange}
            elements={[{id: 1, firstName: 'John', lastName: 'Doe'}, {id:2, firstName: 'Jack', lastName: 'Doe'}]}
            getName={(elem) => elem.firstName + ' ' + elem.lastName}
        />)
        expect(wrapper.length).toEqual(1)
        expect(wrapper).toMatchSnapshot()

    })
})