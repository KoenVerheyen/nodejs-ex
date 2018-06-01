// @flow
import DevLoginPageComponent from './DevLoginPageComponent'
import {connect} from 'react-redux'
import {selectIdentity, selectToken} from './DevLoginPageActions'


let mapStateToProps = (state: Function, ownProps: Object): Object => {
    return {
        token: state.rad.iam.token,
        identities: state.rad.iam.user ? state.rad.iam.user.identities : [],
        loading: state.rad.iam.loading
    }
}

let mapDispatchToProps = (dispatch: Function, ownProps: Object): Object => {
    return {
        onSelectToken: (token: number) => {dispatch(selectToken(token))},
        postSelectIdentity: (token: number, identity: Object) => {dispatch(selectIdentity(token, identity))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DevLoginPageComponent)