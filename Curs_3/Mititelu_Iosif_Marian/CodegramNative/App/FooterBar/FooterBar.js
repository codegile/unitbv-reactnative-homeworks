import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

let home = require('./res/home.png');
let search = require('./res/search.png');
let add = require('./res/add.png');
let heart = require('./res/heart.png');
let profile = require('./res/profile.png');

export default class FooterBar extends Component {
  render() {
    return (
      <View style={styles.lowerBar}>
        <Image source={home} style={styles.lowerBarBtn1} />
        <Image source={search} style={styles.lowerBarBtn2} />
        <Image source={add} style={styles.lowerBarBtn3} />
        <Image source={heart} style={styles.lowerBarBtn4} />
        <Image source={profile} style={styles.lowerBarBtn5} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lowerBar: {
    flex: 1,
    flexDirection: 'row',
  },
  lowerBarBtn1: {
    flex: 1,
    height: '100%',
  },
  lowerBarBtn2: {
    flex: 1,
    height: '100%',
  },
  lowerBarBtn3: {
    flex: 1,
    height: '100%',
  },
  lowerBarBtn4: {
    flex: 1,
    height: '100%',
  },
  lowerBarBtn5: {
    flex: 1,
    height: '100%',
  },
});