// @flow
import {combineEpics} from 'redux-observable'
import DevLoginPageEpic from "../login/DevLoginPageEpic";

const RootEpic = combineEpics(
    DevLoginPageEpic
)

export default RootEpic