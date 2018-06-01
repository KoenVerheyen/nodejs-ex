import {getUserContext} from "../api";

describe('getUserContext', () => {
    test('only token', () => {
        let request$ = getUserContext('lrc')
        expect(request$.source.request.headers['nconect.security.tokenId']).toEqual('lrc')
        expect(request$.source.request.headers['nconect.remote.interface']).toEqual('eurocontrol.nconect.security.SecurityContextService')
        expect(request$.source.request.headers['nconect.security.personId']).toBeUndefined()
        expect(request$.source.request.headers['nconect.security.functionId']).toBeUndefined()
        expect(request$.source.request.headers['nconect.security.profileId']).toBeUndefined()
    })

    test('token, person, function, profile', () => {
        let request$ = getUserContext('nrc', 1, 2, 3)
        expect(request$.source.request.headers['nconect.security.tokenId']).toEqual('nrc')
        expect(request$.source.request.headers['nconect.remote.interface']).toEqual('eurocontrol.nconect.security.SecurityContextService')
        expect(request$.source.request.headers['nconect.security.personId']).toEqual(1)
        expect(request$.source.request.headers['nconect.security.functionId']).toEqual(2)
        expect(request$.source.request.headers['nconect.security.profileId']).toEqual(3)
    })

    test('token, person', () => {
        let request$ = getUserContext('nrc', 1)
        expect(request$.source.request.headers['nconect.security.tokenId']).toEqual('nrc')
        expect(request$.source.request.headers['nconect.remote.interface']).toEqual('eurocontrol.nconect.security.SecurityContextService')
        expect(request$.source.request.headers['nconect.security.personId']).toBeUndefined()
        expect(request$.source.request.headers['nconect.security.functionId']).toBeUndefined()
        expect(request$.source.request.headers['nconect.security.profileId']).toBeUndefined()
    })
})