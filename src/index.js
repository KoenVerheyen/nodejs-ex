// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {LocaleProvider} from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'
import Root from './Root'
import configureStore from './store/Store'

let store = configureStore()

if (window.RAD_AUTO_LOAD) {
    ReactDOM.render(
        <LocaleProvider locale={enUS}>
            <Provider store={store}>
                <Root />
            </Provider>
        </LocaleProvider>,
        // $FlowFixMe
        document.getElementById('root')
    )
}