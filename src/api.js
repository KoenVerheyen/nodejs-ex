// @flow
import {ajax} from 'rxjs/observable/dom/ajax'

export function getUserContext(token: string, personId?: number, functionId?: number, profileId?: number) {
    let headers = {
        'nconect.security.tokenId': token,
        'nconect.remote.interface': 'eurocontrol.nconect.security.SecurityContextService',
    }
    if (personId && functionId && profileId) {
        // $FlowFixMe
        headers['nconect.security.personId'] = personId
        // $FlowFixMe
        headers['nconect.security.functionId'] = functionId
        // $FlowFixMe
        headers['nconect.security.profileId'] = profileId
    }
    return ajax.getJSON('/api/iam/v1/userContext', headers)
}