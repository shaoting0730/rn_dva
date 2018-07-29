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
export default class One extends Component<Props> {

    static navigationOptions = {
        tabBarLabel: '苹果',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
                source={focused ?  Images.Tab.OneActive : Images.Tab.One}
                style={{ width: 25, height: 25 }}
            />
        ),
    }

    render() {
        return (
            <View style={styles.container}>
                    <Text onPress={()=>this.add()}>
                        + 红
                    </Text>
                    <Text>
                        One {this.props.num}
                    </Text>
                    <Text onPress={()=>this.sub()}>
                        - 蓝
                    </Text>
            </View>
        );
    }

    add =() =>{
        this.props.dispatch(createAction('app/add')(this.props.num + 1))
    }

    sub =() =>{
        this.props.dispatch(createAction('app/sub')(this.props.num - 1))
    }

    componentDidMount() {
        console.log(this.props)
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
