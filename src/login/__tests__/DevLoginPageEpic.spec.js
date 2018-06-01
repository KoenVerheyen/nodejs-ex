
import {
    retrieveUserInfoFailed, selectIdentity, selectIdentityFailed, selectIdentitySuccessful, selectToken,
    userInfoReceived
} from '../DevLoginPageActions';
import {Observable} from 'rxjs/Observable'
import {ActionsObservable} from 'redux-observable';
import DevLoginPageEpic from '../DevLoginPageEpic'

describe('Epic test', () => {

    test('Select Token', () => {
        let action$ = ActionsObservable.of(selectToken('lrc'))
        let user = {token: 'lrc', identities: [{a: 'a'}, {a: 'b'}]}
        let api = {getUserContext: (token) => Observable.of(user)}

        DevLoginPageEpic(action$, undefined, api)
            .toArray()
            .subscribe(
                (actions) => {
                    expect(actions.length).toEqual(1)
                    expect(actions[0]).toMatchObject(userInfoReceived(user))
                }
            )
    })

    test('Select Token failed', () => {
        let action$ = ActionsObservable.of(selectToken('lrc'))
        let error = {message: 'some error'}
        let api = {getUserContext: (token) => Observable.throw({error})}

        DevLoginPageEpic(action$, undefined, api)
            .toArray()
            .subscribe(
                (actions) => {
                    expect(actions.length).toEqual(1)
                    expect(actions[0]).toMatchObject(retrieveUserInfoFailed({error}))
                }
            )
    })

    test('Select Token while select token in progress', (done) => {
        let action$ = ActionsObservable.of(selectToken('lrc'), selectToken('nrc'))
        let user = (token) =>  { return {token, identities: [{a: 'a'}, {a: 'b'}]}}
        let api = {getUserContext: (token) => {
            return Observable.of(user(token)).delay(50)
        }}

        expect.assertions(2)
        DevLoginPageEpic(action$, undefined, api)
            .toArray()
            .subscribe(
                (actions) => {
                    expect(actions.length).toEqual(1)
                    expect(actions[0]).toMatchObject(userInfoReceived(user('nrc')))
                    done()
                }
            )

    })

    test('Select identity failed', () => {
        let action$ = ActionsObservable.of(selectIdentity('lrc', {person: 1, function: 2, profile: 3}))
        let error = {message: 'some error'}
        let api = {getUserContext: (token,  personId, functionId, profileId) => Observable.throw({error})}

        DevLoginPageEpic(action$, undefined, api)
            .toArray()
            .subscribe(
                (actions) => {
                    expect(actions.length).toEqual(1)
                    expect(actions[0]).toMatchObject(selectIdentityFailed({error}))
                }
            )
    })

    test('Select identity successful', () => {
        let action$ = ActionsObservable.of(selectIdentity('lrc', {person: 1, function: 2, profile: 3}))
        let user =  (token, personId, functionId, profileId) =>  { return {token, personId, functionId, profileId, identities: [{a: 'a'}, {a: 'b'}]}}
        let api = {getUserContext: (token, personId, functionId, profileId) => Observable.of(user(token, personId, functionId, profileId))}

        DevLoginPageEpic(action$, undefined, api)
            .toArray()
            .subscribe(
                (actions) => {
                    expect(actions.length).toEqual(1)
                    expect(actions[0]).toMatchObject(selectIdentitySuccessful(user('lrc', 1, 2, 3)))
                }
            )
    })

    test('Select identity while select identity in progress', (done) => {
        let action$ = ActionsObservable.of(selectIdentity('lrc', {person: 1, function: 2, profile: 3}), selectIdentity('nrc', {person: 4, function: 5, profile: 6}))
        let user =  (token, personId, functionId, profileId) =>  { return {token, personId, functionId, profileId, identities: [{a: 'a'}, {a: 'b'}]}}
        let api = {getUserContext: (token, personId, functionId, profileId) => Observable.of(user(token, personId, functionId, profileId)).delay(50)}

        DevLoginPageEpic(action$, undefined, api)
            .toArray()
            .subscribe(
                (actions) => {
                    expect(actions.length).toEqual(1)
                    expect(actions[0]).toMatchObject(selectIdentitySuccessful(user('nrc', 4, 5, 6)))
                    done()
                }
            )
    })
})