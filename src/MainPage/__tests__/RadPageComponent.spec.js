import React from 'react'
import RadPageComponent from '../RadPageComponent'
import {shallow} from 'enzyme'



describe('RadPageComponent', () => {

    test('Standard', () => {
        let wrapper = shallow(<RadPageComponent match={{path: '/rad'}} location={{pathname: '/rad/query'}}/>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.length).toEqual(1)
    })

})