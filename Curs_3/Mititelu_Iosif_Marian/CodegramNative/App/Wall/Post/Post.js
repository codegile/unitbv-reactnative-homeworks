import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import { default as PostBar } from './PostBar/PostBar.js';
import { default as PostImage } from './PostImage/PostImage.js';

export default class Post extends Component {
    render() {
        return (
            <View style={styles.post}>
                <PostBar nameText={this.props.name}
                    areaText={this.props.area}
                    profileImg={this.props.profile} />
                <PostImage source={this.props.image} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    post: {
        flex: 1,
        maxWidth: '100%',
        maxHeight: '50%'
    },
});