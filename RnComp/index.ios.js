/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
} from 'react-native';
import Comp from './components/index';


export default class RnComp extends Component {
  _press = e => {
    Alert.alert('提示', `Press!`);
  };

  render() {
    return (
      <Comp onPress={this._press} cssStyles={[styles.radius5]}>
        <Image source={require('./assets/launch.jpeg')} style={{width:375, height:667}} />
      </Comp>
    );
  }
}

const styles = StyleSheet.create({
  radius5:{
    borderRadius:5,
    overflow:'hidden'
  },
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

AppRegistry.registerComponent('RnComp', () => RnComp);
