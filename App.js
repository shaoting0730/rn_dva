import React from 'react'
import { AppRegistry } from 'react-native'

import dva from './src/Utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'
import appModel from './src/models/app'

const app = dva({
    initialState: {},
    models: [appModel],
    extraReducers: { router: routerReducer },
    onAction: [routerMiddleware],
    onError(e) {
        console.log('onError', e)
    },
})

const App = app.start(<Router />)

AppRegistry.registerComponent('rn_dva', () => App)