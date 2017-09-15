/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
} from 'react-native';
// import AppNavigator from './common/navigator';
import codePush from 'react-native-code-push';

import PdfView from './component/pdfView';

CODE_PUSH_PRODUCTION_KEY = 'p19Zz1OLcDQbWXaVG9EeV6XpyW5jddab8bab-41f9-4d9e-b03c-c8c94c366a1b ';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 50,
        justifyContent: 'center',
        // alignItems: 'center',
    }
})

export default class ReactNativeDemos extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // const s = new Set();
        // [2,3,4,5,5,2,5,3].forEach(x => s.add(x));
        // for (let i of s) {
        //     console.log(i);
        // }
        // const aa = new Set(['北京市','上海市','天津市','天津市','深圳市','北京市'])
        // const b = [...aa];
        // console.log('###',b);
        // codePush.sync({
        //     updateDialog: {
        //         appendReleaseDescription: true,
        //         descriptionPrefix:'\n\n更新内容：\n',
        //         title:'更新',
        //         mandatoryUpdateMessage:'',
        //         mandatoryContinueButtonLabel:'更新',
        //     },
        //     mandatoryInstallMode:codePush.InstallMode.IMMEDIATE,
        //     // deploymentKey: CODE_PUSH_PRODUCTION_KEY,
        //     installMode: codePush.InstallMode.ON_NEXT_RESTART,
        // });
        let aa = null;
        console.log('aa type =', aa !== null && typeof (aa) === 'object');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>我是第二版测试更新&&&&&</Text>
                <PdfView/>
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeDemos', () => ReactNativeDemos);