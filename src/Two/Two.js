/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { connect } from 'react-redux'
import { createAction, NavigationActions } from '../Utils'
import  {Images} from "../Image";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
@connect(({ app }) => ({ ...app }))
export default class Two extends Component<Props> {

    static navigationOptions = {
        tabBarLabel: '安卓',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ?  Images.Tab.TwoActive : Images.Tab.Two}
                style={{ width: 25, height: 25 }}
            />
        ),
    }

    render() {
        return (
            <View style={[styles.container,{backgroundColor:this.props.mineType == '红' ? 'red' : 'blue'}]}>
                <Text style={styles.welcome}>
                    TWO + {this.props.mineType}
                </Text>
            </View>
        );
    }

    componentDidMount() {
        console.log(this.props.mineType)

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
