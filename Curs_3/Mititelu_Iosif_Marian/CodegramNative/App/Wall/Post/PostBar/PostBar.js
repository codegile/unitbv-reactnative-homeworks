import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class PostBar extends Component {
    render() {
        return (
            <View style={this.props.postBar}>
                <View style={styles.postBarLeft}>
                    <View style={styles.postBarLeftLeft}>
                        <Image style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            borderRadius: 50
                        }} source={this.props.profileImg}></Image>
                    </View>
                    <View style={styles.postBarLeftRight}>
                        <View style={styles.postBarLeftRightUp}>
                            <Text style={styles.text}>
                                {this.props.nameText}
                            </Text>
                        </View>
                        <View style={styles.postBarLeftRightDown}>
                            <Text style={styles.text}>
                                {this.props.areaText}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    postBar: {
        flex: 1,
        maxHeight: '15%',
        maxWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    postBarLeft: {
        flex: 1,
        flexDirection: 'row',
        maxWidth: '60%',
        height: 80,
    },
    postBarLeftLeft: {
        flex: 1,
        maxWidth: '40%',


    },
    postBarLeftRight: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        maxWidth: '60%',
    },
    postBarLeftRightUp: {
        flex: 1,

    },
    postBarLeftRightDown: {
        flex: 1,
    },
    postBarRight: {
        flex: 1,

        maxWidth: '20%',
        marginBottom: 10,
    },

    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    }
}
);