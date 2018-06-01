import React from 'react'
import {shallow} from 'enzyme'
import DevLoginPageComponent from "../DevLoginPageComponent";


describe('DevLoginComponent', () => {

    test('initial', () => {
        let wrapper = shallow(<DevLoginPageComponent identities={[]}/>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.length).toEqual(1)
        let optionList = wrapper.find('Option')
        expect(optionList.length).toEqual(3)
        expect(optionList.get(0).props.value).toEqual('lrc')
        expect(optionList.get(1).props.value).toEqual('nrc')
        expect(optionList.get(2).props.value).toEqual('rad')
    })


    test('selected token', () => {
        let identities = [
            {
                person: {
                    id: 1,
                    lastName: 'Doe',
                    firstName: 'John'
                },
                function: {
                    id: 1,
                    name: 'functionLF'
                },
                profile: {
                    id: 1,
                    name: 'local rad coordinator'
                }
            },
            {
                person: {
                    id: 1,
                    lastName: 'Doe',
                    firstName: 'John'
                },
                function: {
                    id: 2,
                    name: 'functionEB'
                },
                profile: {
                    id: 1,
                    name: 'local rad coordinator'
                }
            }
        ]
        let submitIdentity = jest.fn()
        let wrapper = shallow(<DevLoginPageComponent token='lrc' identities={identities} postSelectIdentity={submitIdentity}/>)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.length).toEqual(1)
        let select = wrapper.find('Select')
        expect(select.length).toEqual(1)
        expect(select.props().value).toEqual('lrc')

        let person = wrapper.find('IdentityFormSelect[name="person"]')
        expect(person.length).toEqual(1)
        expect(person.props().getName(identities[0].person)).toEqual('John Doe')
        expect(wrapper.state().identity.person).not.toEqual(1)
        person.props().onSelectChange(1)
        expect(wrapper.state().identity.person).toEqual(1)

        let functionSelect = wrapper.find('IdentityFormSelect[name="function"]')
        expect(functionSelect.length).toEqual(1)
        expect(functionSelect.props().getName(identities[0].function)).toEqual('functionLF')
        functionSelect.props().onSelectChange(1)
        expect(wrapper.state().identity.function).toEqual(1)

        let profile = wrapper.find('IdentityFormSelect[name="profile"]')
        expect(profile.length).toEqual(1)
        expect(profile.props().getName(identities[0].profile)).toEqual('local rad coordinator')
        profile.props().onSelectChange(1)
        expect(wrapper.state().identity.profile).toEqual(1)


        let loginButton = wrapper.find('Button')
        expect(loginButton.length).toEqual(1)
        loginButton.simulate('click')
        expect(submitIdentity).toHaveBeenCalledTimes(1)
    })



    test('selected token loading', () => {
        let identities = [
            {
                person: {
                    id: 1,
                    lastName: 'Doe',
                    firstName: 'John'
                },
                function: {
                    id: 1,
                    name: 'functionLF'
                },
                profile: {
                    id: 1,
                    name: 'local rad coordinator'
                }
            }
        ]
        let wrapper = shallow(<DevLoginPageComponent token='lrc' identities={identities} loading={true}/>)

        expect(wrapper).toMatchSnapshot()

        let loginButton = wrapper.find('Button')
        expect(loginButton.length).toEqual(1)
        expect(loginButton.props().loading).toEqual(true)
    })

})