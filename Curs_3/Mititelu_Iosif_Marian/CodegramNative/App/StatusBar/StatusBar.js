import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

let debug = require('./res/debug.gif');
let name = require('./res/giphy.gif');
let run = require('./res/run.gif');

export default class StatusBar extends Component {
  render() {
    return (
      <View style={styles.upperBar}>
        <Image source={debug} style={styles.upperBarBtn1} />
        <Image source={name} style={styles.upperBarBtn2} />
        <Image source={run} style={styles.upperBarBtn3} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  upperBar: {
    flex: 1,
    flexDirection: 'row',
  },
  upperBarBtn1: {
    flex: 1,
    height: '100%',
  },
  upperBarBtn2: {
    flex: 3,
    height: '100%',
  },
  upperBarBtn3: {
    flex: 1,
    height: '100%',
  },
});