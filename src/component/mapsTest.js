import React, {Component, PropTypes} from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native';
import MapsUtils from '../utils/MapUtils';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

class mapsTest extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        style: PropTypes.object,
    };

    componentDidMount() {

    }
    reloadMaps() {
        MapsUtils.turn2MapApp(116.337134,39.999342,'baidu');
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.reloadMaps()}>
                    <Text style={{color: 'blue', fontSize: 16}}>调起地图应用</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default mapsTest;
