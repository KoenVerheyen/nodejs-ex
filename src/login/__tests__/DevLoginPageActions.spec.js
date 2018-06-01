import * as actions from '../DevLoginPageActions'
import {SELECT_TOKEN} from "../DevLoginPageActions";
import {USER_INFO_RECEIVED} from "../DevLoginPageActions";
import {RETRIEVE_USER_INFO_FAILED} from "../DevLoginPageActions";
import {SELECT_IDENTITY} from "../DevLoginPageActions";
import {SELECT_IDENTITY_SUCCESS} from "../DevLoginPageActions";
import {SELECT_IDENTITY_FAILED} from "../DevLoginPageActions";

describe('Dev Login page Actions', () => {

    test('Select token', () => {
        let selectTokenAction = actions.selectToken('lre')
        expect(selectTokenAction).toMatchObject({
            type: SELECT_TOKEN,
            token: 'lre'
        })
    })


    test('user info received', () => {
        let selectTokenAction = actions.userInfoReceived({ a: 'b', c: 'D'})
        expect(selectTokenAction).toMatchObject({
            type: USER_INFO_RECEIVED,
            user: {
                a: 'b',
                c: 'D'
            }
        })
    })

    test('retrieve user info failed', () => {
        let selectTokenAction = actions.retrieveUserInfoFailed({ error: 'some error'})
        expect(selectTokenAction).toMatchObject({
            type: RETRIEVE_USER_INFO_FAILED,
            error: {
                error: 'some error'
            }
        })
    })

    test('Select identity', () => {
        let selectTokenAction = actions.selectIdentity('lre', {person: 1, function: 1, profile: 1})
        expect(selectTokenAction).toMatchObject({
            type: SELECT_IDENTITY,
            token: 'lre',
            person: 1,
            function: 1,
            profile: 1
        })
    })

    test('select identity successful', () => {
        let selectTokenAction = actions.selectIdentitySuccessful({token: 'lre', person: 1, function: 1, profile: 1})
        expect(selectTokenAction).toMatchObject({
            type: SELECT_IDENTITY_SUCCESS,
            user: {
                token: 'lre',
                person: 1,
                function: 1,
                profile: 1
            }
        })
    })

    test('select identity failed', () => {
        let selectTokenAction = actions.selectIdentityFailed({ error: 'some error'})
        expect(selectTokenAction).toMatchObject({
            type: SELECT_IDENTITY_FAILED,
            error: {
                error: 'some error'
            }
        })
    })


})