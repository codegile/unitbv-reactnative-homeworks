import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';


import { default as Post } from './Post/Post.js';

import { data } from './data.js'

export default class Wall extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  render() {
    return (
      <View style={styles.wallContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={
            function (rowData) {
              return (
                <View style={styles.list}>
                  <Post
                    key={rowData.id}
                    name={rowData.name}
                    area={rowData.area}

                    profile={rowData.profile}
                    image={rowData.image}
                  />
                </View>
              )
            }}
          renderSeparator={this._renderSeparator} />
      </View>
    )
  }
  _renderSeparator = function (sectionID = number, rowID = number, adjacentRowHighlighted = bool) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    );
  }


}





const styles = StyleSheet.create({
  wallContainer: {
    flex: 9,
    maxHeight: '100%',
    maxWidth: '100%',
  },
  list: {
    maxHeight: '30%',
    maxWidth: '100%',
  }
});