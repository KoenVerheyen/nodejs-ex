// @flow

import {
    SELECT_IDENTITY, SELECT_IDENTITY_FAILED, SELECT_IDENTITY_SUCCESS, SELECT_TOKEN,
    USER_INFO_RECEIVED
} from './DevLoginPageActions'
import type {DevLoginAction} from './DevLoginPageActions'

const DevLoginPageReducer = (state: Object ={}, action: DevLoginAction) => {
    switch (action.type) {
        case SELECT_TOKEN: {
            return {
                ...state,
                token: action.token
            }
        }
        case USER_INFO_RECEIVED: {
            return {
                ...state,
                user: action.user
            }
        }
        case SELECT_IDENTITY: {
            return {
                ...state,
                loading: true,
                token: action.token,
                person: action.person,
                function: action.function,
                profile: action.profile,
            }
        }
        case SELECT_IDENTITY_SUCCESS: {
            return {
                ...state,
                loading: false,
                connected: true,
                user: action.user,
            }
        }
        case SELECT_IDENTITY_FAILED: {
            return {
                ...state,
                loading: false,
                connected: false,
                error: action.error,
            }
        }
        default:
            return state
    }
}

export default DevLoginPageReducer