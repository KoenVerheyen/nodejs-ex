import reducers from '../DevLoginPageReducer'
import {
    SELECT_IDENTITY, SELECT_IDENTITY_FAILED, SELECT_IDENTITY_SUCCESS, SELECT_TOKEN,
    USER_INFO_RECEIVED
} from "../DevLoginPageActions";

describe('DevLoginPageReducer', () => {

    test('Select token', () => {
        let mockAction = {
            type: SELECT_TOKEN,
            token: 'lrc'
        }

        let expectedStore = expect.objectContaining({
            token: 'lrc',
        })

        expect(reducers(undefined, mockAction)).toEqual(expectedStore)
    })


    test('user info received', () => {
        let mockAction = {
            type: USER_INFO_RECEIVED,
            user: {
                token: 'lrc',
                identities: [
                    {
                        person: 1,
                        function: 'c',
                        profile: 'z'
                    }
                ]
            }
        }

        let expectedStore = expect.objectContaining({
            token: 'lrc',
            user : {
                token: 'lrc',
                identities: [
                    {
                        person: 1,
                        function: 'c',
                        profile: 'z'
                    }
                ]
            }
        })

        let initialStore = {
            token: 'lrc',
        }

        expect(reducers(initialStore, mockAction)).toEqual(expectedStore)
    })

    test('Select identity', () => {
        let mockAction = {
            type: SELECT_IDENTITY,
            token: 'lrc',
            person: 1,
            function: 2,
            profile: 5,
        }

        let expectedStore = expect.objectContaining({
            token: 'lrc',
            loading: true,
            person: 1,
            function: 2,
            profile: 5,
        })

        let initialStore = {
            token: 'lrc',
        }

        expect(reducers(initialStore, mockAction)).toEqual(expectedStore)
    })

    test('Select identity success', () => {
        let mockAction = {
            type: SELECT_IDENTITY_SUCCESS,
            user: {
                identity: {
                    person: 1,
                    function: 2,
                    profile: 5,
                }
            }
        }

        let expectedStore = expect.objectContaining({
            token: 'lrc',
            loading: false,
            user: {
                identity: {
                    person: 1,
                    function: 2,
                    profile: 5,
                }
            }
        })

        let initialStore = {
            token: 'lrc',
        }

        expect(reducers(initialStore, mockAction)).toEqual(expectedStore)
    })

    test('Select identity failed', () => {
        let mockAction = {
            type: SELECT_IDENTITY_FAILED,
            error: {
                message: 'It failed!'
            }
        }

        let expectedStore = expect.objectContaining({
            token: 'lrc',
            loading: false,
            error: {
                message: 'It failed!'
            }
        })

        let initialStore = {
            token: 'lrc',
        }

        expect(reducers(initialStore, mockAction)).toEqual(expectedStore)
    })
})