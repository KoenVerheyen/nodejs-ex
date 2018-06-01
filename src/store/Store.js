// @flow
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {createEpicMiddleware} from 'redux-observable'
import reducers from './Reducers'
import RootEpic from './RootEpic'

export default function configureStore() {
    // Redux-observer middleware where all the time related logic and the connections to the rad cell is implemented.
    let epicMiddleware = createEpicMiddleware(RootEpic)

    let middleware = (process.env.NODE_ENV === 'development')?
        applyMiddleware( epicMiddleware, logger()) :
        applyMiddleware( epicMiddleware )


    // $FlowFixMe
    let store = createStore(
        reducers,
        {
            rad: {
                iam: {
                    connected: false
                }
            },
        },
        middleware,
    )

    return store
}