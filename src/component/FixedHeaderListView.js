import React, {Component, PropTypes} from 'react';
import {
    View,
    StyleSheet,
    ListView,
    Text,
    TouchableOpacity,
    Image,
    PixelRatio
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerViewStyle: {
        height: 64,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },

    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1 / PixelRatio.get()
    },

    rowImageStyle: {
        width: 70,
        height: 70,
    },

    sectionHeaderViewStyle: {
        backgroundColor: 'red',
        height: 30,
        justifyContent: 'center'
    }
});

class FixedHeaderListView extends Component {
    constructor(props) {
        super(props);

        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        }

        this.state = {
            dataSource: new ListView.DataSource({
                getSectionHeaderData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            })
        }
    }

    static propTypes = {
        style: PropTypes.object,
    };

    componentDidMount() {
        this.loadDataFromJson();
    }

    loadDataFromJson() {
        var jsonData = this.props.data;
        var dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            cars = [];
        for (var i in jsonData) {
            // step1. 把组数据放入sectionIDs数组中
            sectionIDs.push(i);
            // step2. 把数组中内容放入dataBlob对象中
            dataBlob[i] = jsonData[i].title;
            // step3. 取出该组中所有的车
            cars = jsonData[i].cars;
            // step4. 记录每一行的数据
            rowIDs[i] = [];
            // step5. 获取行中每一组的数据
            for (var j in cars) {
                // 把行号放入rowIDs中
                rowIDs[i].push(j);
                // 把每一行中的内容放dataBlob对象中
                dataBlob[i + ':' + j] = cars[j];
            }
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{color: 'blue', fontSize: 25 }}>汽车品牌</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    renderSectionHeader={this.renderSectionHeader.bind(this)}
                />
            </View>
        )
    }

    // 每一行的数据
    renderRow(rowData) {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.rowStyle}>
                    <Image source={{uri: rowData.icon}} style={styles.rowImageStyle}/>
                    <Text style={{marginLeft: 5}}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    // 每一组中的数据
    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.sectionHeaderViewStyle}>
                <Text style={{marginLeft: 5, color: 'white'}}>{sectionData}</Text>
            </View>
        );
    }
}

export default FixedHeaderListView;
