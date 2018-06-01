import React from 'react'
import {shallow} from 'enzyme'
import configureMockStore from 'redux-mock-store'
import DevLoginPageContainer from '../DevLoginPageContainer'
import {selectIdentity, selectToken} from "../DevLoginPageActions";


const mockStore = configureMockStore([])

describe('DevLoginPageContainer', () => {

    test('store to component mapping without user', () => {
        let store = mockStore({
            rad: {
                iam: {
                    loading: false,
                    token: 'lrc',
                }
            }
        })

        let wrapper = shallow(<DevLoginPageContainer store={store} />)

        expect(wrapper.length).toEqual(1)
        expect(wrapper).toMatchSnapshot()
        let component = wrapper.find('DevLoginPageComponent')
        expect(component.length).toEqual(1)
        expect(component.props().token).toEqual('lrc')
        expect(component.props().loading).toEqual(false)

        component.props().onSelectToken('lrc')
        expect(store.getActions().length).toEqual(1)
        expect(store.getActions()[0]).toMatchObject(selectToken('lrc'))
    })

    test('store to component mapping with user', () => {
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
        let store = mockStore({
            rad: {
                iam: {
                    loading: true,
                    token: 'lrc',
                    user: {
                        identities
                    }
                }
            }
        })

        let wrapper = shallow(<DevLoginPageContainer store={store} />)

        expect(wrapper.length).toEqual(1)
        expect(wrapper).toMatchSnapshot()
        let component = wrapper.find('DevLoginPageComponent')
        expect(component.length).toEqual(1)
        expect(component.props().token).toEqual('lrc')
        expect(component.props().loading).toEqual(true)
        expect(component.props().identities).toMatchObject(identities)
        expect(component.props().identities.length).toEqual(2)

        component.props().postSelectIdentity('lrc', {person: 1, function: 1, profile: 1})
        expect(store.getActions().length).toEqual(1)
        expect(store.getActions()[0]).toMatchObject(selectIdentity('lrc', {person: 1, function: 1, profile: 1}))
    })
})