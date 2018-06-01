// @flow

export const SELECT_TOKEN = 'SELECT_TOKEN'
export const USER_INFO_RECEIVED = 'USER_INFO_RECEIVED'
export const RETRIEVE_USER_INFO_FAILED = 'RETRIEVE_USER_INFO_FAILED'
export const SELECT_IDENTITY = 'SELECT_IDENTITY'
export const SELECT_IDENTITY_SUCCESS = 'SELECT_IDENTITY_SUCCESS'
export const SELECT_IDENTITY_FAILED = 'SELECT_IDENTITY_FAILED'



type SelectTokenAction = {
    type: 'SELECT_TOKEN',
    token: number
}

type SelectIdentitySuccessfulAction = {
    type: 'SELECT_IDENTITY_SUCCESS',
    user: Object
}

type SelectIdentityFailedAction = {
    type: 'SELECT_IDENTITY_FAILED',
    error: Object
}

type RetrieveUserInfoFailedAction = {
    type: 'RETRIEVE_USER_INFO_FAILED',
    error: Object
}

type UserInfoReceivedAction = {
    type: 'USER_INFO_RECEIVED',
    user: Object
}

type SelectIdentityAction = {
    type: 'SELECT_IDENTITY',
    token: number,
    person: number,
    function: number,
    profile: number
}

export type DevLoginAction =
    | SelectTokenAction
    | UserInfoReceivedAction
    | RetrieveUserInfoFailedAction
    | SelectIdentityAction
    | SelectIdentitySuccessfulAction
    | SelectIdentityFailedAction

export function selectToken(token: number) : SelectTokenAction {
    return {
        type: SELECT_TOKEN,
        token: token
    }
}

export function userInfoReceived(user: Object): UserInfoReceivedAction {
    return {
        type: USER_INFO_RECEIVED,
        user: user
    }
}

export function retrieveUserInfoFailed(error: Object): RetrieveUserInfoFailedAction {
    return {
        type: RETRIEVE_USER_INFO_FAILED,
        error: error
    }
}




export function selectIdentity(token: number, identity: { person: number, function: number, profile: number}): SelectIdentityAction {
    return {
        type: SELECT_IDENTITY,
        token: token,
        person: identity.person,
        function: identity.function,
        profile: identity.profile,
    }
}

export function selectIdentitySuccessful(user: Object): SelectIdentitySuccessfulAction {
    return {
        type: SELECT_IDENTITY_SUCCESS,
        user: user
    }
}

export function selectIdentityFailed(error: Object): SelectIdentityFailedAction {
    return {
        type: SELECT_IDENTITY_FAILED,
        error: error
    }
}