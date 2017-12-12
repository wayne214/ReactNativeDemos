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
import Speech from 'native-speech';
import CameraDemo from '../src/component/cameraDemo';

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
        // let aa = null;
        // console.log('aa type =', aa !== null && typeof (aa) === 'object');
        //
        // console.log('car data',Car.data);

        // VoiceUtils.speak('您有新货源，快来接单啦', 0);
        const a1 = [1, 2];

        console.log('将数组转化成参数序列', ...a1);

        // 复制数组
        const a2 = [...a1];
        console.log('复制后的数组', a2);

        // 合并数组
        const a3 = [3, 4, 5];
        console.log('合并后的数组', [...a1, ...a3]);

        // 字符串
        console.log('将字符串转化为字符数组', [...'hello']);

        // Map 和 Set 结构
        let map = new Map([
            [1, 'one'],
            [2, 'two'],
            [3, 'three'],
        ]);

        let arr = [...map.keys()]; // [1, 2, 3]
        console.log('map结构和扩展运算符', arr);

        // 数组去重
        const array = [1, 2, 3, 4, 3, 4, 5, 7, 8, 5];
        const newArray = [...new Set(array)];
        console.log('原数组', array);
        console.log('数组去重', newArray);

        // js判断object里面是否包含某一字段
        var obj = {
            name:"王中",
            age:"26岁",
            grade:"毕业",
            speciality:"计算机",
            girlfriend:"郭英卓",
            gongfu:"阴阳宫"
        };
        // if (obj.hasOwnProperty("age")){                 //判断age是否存在于obj里面
        // }
        console.log('obj是否包含age字段', obj.hasOwnProperty("age"));

    }
    speak(voiceType) {
        VoiceUtils.speak('您有新货源，快来接单啦', voiceType);
    }
    speek2() {
        Speech.speak('测试语音');
    }
    render() {
        return (
            <View style={styles.container}>
                {/*<View style={{backgroundColor: 'green'}}>*/}
                    {/*<Text>我是不一样的烟火</Text>*/}
                {/*</View>*/}
                {/*<TouchableOpacity onPress={()=> {*/}
                    {/*this.speek2();*/}
                {/*}}>*/}
                    {/*<Text>双击66666</Text>*/}
                {/*</TouchableOpacity>*/}
                {/*<Text>双击66666</Text>*/}
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
                <CameraDemo/>
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeDemos', () => ReactNativeDemos);