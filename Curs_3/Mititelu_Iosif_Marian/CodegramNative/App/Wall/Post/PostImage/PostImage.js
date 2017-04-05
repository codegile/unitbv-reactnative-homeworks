import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class PostImage extends Component {
    render() {
        return (
            <View style={styles.postImage}>
                <Image style={{ maxHeight: '85%', maxWidth: '100%' }} source={this.props.source} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    postImage: {
        flex: 1,
        marginBottom: 5,
        marginTop: 5
    },
});