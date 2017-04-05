import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { default as StatusBar } from './App/StatusBar/StatusBar.js';
import { default as FooterBar } from './App/FooterBar/FooterBar.js';
import { default as Wall } from './App/Wall/Wall.js';


export default class CodegramNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Wall />
        <FooterBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

AppRegistry.registerComponent('CodegramNative', () => CodegramNative);
