import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing,Image } from 'react-native'
import {
    createStackNavigator,
    createBottomTabNavigator,
    NavigationActions,
} from 'react-navigation'
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import One from './src/One/One'
import Two from './src/Two/Two'

const HomeNavigator = createBottomTabNavigator({
    One: {
        screen: One
    },
    Two: {
        screen: Two
    },
})

HomeNavigator.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index]

    return {
        headerTitle: routeName,
    }
}

const MainNavigator = createStackNavigator(
    {
        HomeNavigator: { screen: HomeNavigator },
    }
)

const AppNavigator = createStackNavigator(
    {
        Main: { screen: MainNavigator },
    },
    {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: false,
        },
    }
)

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.router
)

const App = reduxifyNavigator(AppNavigator, 'root')

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {

    render() {
        const { app, dispatch, router } = this.props
        return <App dispatch={dispatch} state={router} />
    }
}

export default Router
