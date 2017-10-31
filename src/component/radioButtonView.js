import React, {Component, PropTypes} from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import RadioGroup from '../component/radioGroup';
import RadioButton from '../component/radioButton';
import m2 from '../../assets/imgs/m_2_100.png';
import m3 from '../../assets/imgs/m_3_100.png';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

class radioButtonView extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        style: PropTypes.object,
    };

    componentDidMount() {

    }
    onSelect(index, value){
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
        console.log('支付方式', value);
    }
    render() {
        return (
            <View style={styles.container}>
                <RadioGroup
                    onSelect = {(index, value) => this.onSelect(index, value)}
                    selectedIndex={0}
                    thickness={2}
                >
                    <RadioButton value={'现金'} imageUrl={m2}>
                        <Text>现金</Text>
                    </RadioButton>

                    <RadioButton value={'微信'} imageUrl={m3}>
                        <Text>微信</Text>
                    </RadioButton>

                </RadioGroup>
            </View>
        )
    }
}

export default radioButtonView;
