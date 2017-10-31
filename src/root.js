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
    Image,
    TouchableOpacity
} from 'react-native';
// import AppNavigator from './common/navigator';
import codePush from 'react-native-code-push';

import PdfView from './component/pdfView';

import Car from '.././Car.json';

import RNFixedHeaderListView from './component/FixedHeaderListView';
import CarImage from '../assets/imgs/m_3_100.png';

import CameraTest from './component/CameraTest';

import RnAndIos from './component/rnAndIos';
import MapsTest from './component/mapsTest';
import LinearGradientView from './component/LinearGradientView';
import RadioButton from './component/radioButtonView';

import VoiceUtils from './utils/VoiceUtils';

CODE_PUSH_PRODUCTION_KEY = 'p19Zz1OLcDQbWXaVG9EeV6XpyW5jddab8bab-41f9-4d9e-b03c-c8c94c366a1b ';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
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

        console.log('car data',Car.data);

        // VoiceUtils.speak('您有新货源，快来接单啦', 0);

    }
    speak(voiceType) {
        VoiceUtils.speak('您有新货源，快来接单啦', voiceType);
    }
    render() {
        return (
            <View style={styles.container}>
                {/*<View style={{backgroundColor: 'green'}}>*/}
                    {/*<Text>我是不一样的烟火</Text>*/}
                {/*</View>*/}
                {/*<Text>我是第-----版测试，哈哈</Text>*/}
                {/*/!*<PdfView/>*!/*/}
                {/*/!*<RNFixedHeaderListView data={Car.data}/>*!/*/}
                {/*<Image source={CarImage}/>*/}
                {/*<CameraTest/>*/}
                {/*<TouchableOpacity onPress={() => {this.speak(0)}}>*/}
                    {/*<Text>普通女声</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<TouchableOpacity onPress={() => {this.speak(1)}}>*/}
                    {/*<Text>普通男声</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<RnAndIos/>*/}
                {/*<MapsTest/>*/}
                {/*<LinearGradientView/>*/}
                <RadioButton/>
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeDemos', () => ReactNativeDemos);