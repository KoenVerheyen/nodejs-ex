// @flow
import {combineReducers} from 'redux'
import fetch from 'nes-core-frontend/lib/reducers/core/Fetch';
import webExt from 'nes-core-frontend/lib/reducers/core/WebExt';
import DevLoginPageReducer from "../login/DevLoginPageReducer";

const reducers = combineReducers({
    rad: combineReducers({
        iam: DevLoginPageReducer
    })
})

export default reducers