// @flow


import 'rxjs'
import {Observable} from 'rxjs/Observable'
import {combineEpics} from 'redux-observable'
import * as radApi from '../api'
import {
    retrieveUserInfoFailed, SELECT_IDENTITY, SELECT_TOKEN, selectIdentityFailed, selectIdentitySuccessful,
    userInfoReceived
} from './DevLoginPageActions';
import type {DevLoginAction} from './DevLoginPageActions';
import type {ActionsObservable} from 'redux-observable';

type LightStore = {
    getState: Function,
    dispatch: Function,
}

type LoginApi = {
    getUserContext: Function,
}

const DevLoginPageEpic = combineEpics(
        selectToken,
        selectIdentity
    )


function selectToken(action$: ActionsObservable<DevLoginAction>, store: LightStore, api: LoginApi = radApi) {
    return action$.filter((action) => action.type === SELECT_TOKEN).switchMap((action) => {
        let token = action.token
        return api.getUserContext(token)
            .map((user) => userInfoReceived(user))
            .catch((error) => Observable.of(retrieveUserInfoFailed(error)))
    })
}

function selectIdentity(action$: ActionsObservable<DevLoginAction>, store: LightStore, api: LoginApi = radApi) {
    return action$.filter((action) => action.type === SELECT_IDENTITY).switchMap((action) => {
        return api.getUserContext(action.token, action.person, action.function, action.profile)
            .map((user) => selectIdentitySuccessful(user))
            .catch((error) => Observable.of(selectIdentityFailed(error)))
    })
}


export default DevLoginPageEpic