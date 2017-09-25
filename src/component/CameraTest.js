import React, {Component, PropTypes} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
import {QRScannerView} from 'ac-qrcode';

// import Toast from 'react-native-simple-toast';
class CameraTest extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        style: PropTypes.object,
    };

    componentDidMount() {

    }

    _renderTitleBar() {
        return (
            <Text
                style={{color: 'white', textAlignVertical: 'center', textAlign: 'center', font: 20, padding: 12}}
            >这里添加标题</Text>
        );
    }

    _renderMenu() {
        return (
            <Text
                style={{color: 'white', textAlignVertical: 'center', textAlign: 'center', font: 20, padding: 12}}
            >这里添加底部菜单</Text>
        )
    }

    barcodeReceived(e) {
        // Toast.show('Type: ' + e.type + '\nData: ' + e.data);
        console.log(e)
    }

    render() {
        return (
            < QRScannerView
                onScanResultReceived={this.barcodeReceived.bind(this)}
                renderTopBarView={() => this._renderTitleBar()}
                renderBottomMenuView={() => this._renderMenu()}
            />
        )
    }
}

export default CameraTest;
