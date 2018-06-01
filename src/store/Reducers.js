// @flow
import {combineReducers} from 'redux'
import DevLoginPageReducer from "../login/DevLoginPageReducer";

const reducers = combineReducers({
    rad: combineReducers({
        iam: DevLoginPageReducer
    })
})

export default reducers