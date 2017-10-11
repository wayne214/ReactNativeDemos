import React, {Component, PropTypes} from 'react';
import {
    View,
    StyleSheet,
    NativeModules,
    Text,
    TouchableHighlight,
} from 'react-native';
var CalendarManager = NativeModules.CalendarManager;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 10,
        borderWidth:1,
        borderColor: '#cdcdcd',
    },
});
class CustomButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}
class rnAndIos extends Component {
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
                <Text style={styles.welcome}>
                    封装iOS原生模块实例
                </Text>
                <CustomButton text="点击调用原生模块addEvent方法"
                              onPress={()=>CalendarManager.addEvent('生日聚会', '江苏南通 中天路', new Date().getTime())}
                />
            </View>
        )
    }
}

export default rnAndIos;
