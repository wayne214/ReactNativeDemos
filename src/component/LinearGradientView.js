/**
 * react native 渐变组件 react-native-linear-gradient
 *
 *
 */

import React, {Component, PropTypes} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linearGradient: {
        justifyContent:'center',
        alignItems:'center',
        width:300,
        height:50,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        flexDirection: 'row'
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

class LinearGradientView extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        style: PropTypes.object,
    };

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 0.0}} colors={['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']} style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                        Sign in with Facebook
                    </Text>
                </LinearGradient>
            </View>
        )
    }
}

export default LinearGradientView;
