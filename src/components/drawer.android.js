import React, { Component } from 'react';
import {
  View,
  ListView,
  Text,
  StyleSheet,
  TouchableHighlight,
  StatusBar,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Drawer extends Component {
  render(): ReactElement {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const drawerWidth = Dimensions.get('window').width - 56;
    let dataSource = ds.cloneWithRows([ 'home', 'settings' ]);
    return (
      <View style={styles.drawerContentWrapper} width={drawerWidth}>
        <View style={styles.flag}>
          <Text>"Flag goes here"</Text>
        </View>
        <View style={[ styles.listContainer, this.props.style ]}>
          <ListView
            style={styles.list}
            dataSource={dataSource}
            renderRow={this._renderMenu.bind(this)}
            keyboardShouldPersistTaps={true}
            automaticallyAdjustContentInsets={false}
            keyboardDismissMode="on-drag"
          />
        </View>
      </View>
    );
  }

  _renderMenu(menuEntry: any): View {
    const { navigation } = this.props;
    const entryStyle = [ styles.menuEntry ];
    const entryTextStyle = [ styles.menuText ];
    if (navigation.routes[navigation.index].key === menuEntry) {
      entryStyle.push(styles.selected);
      entryTextStyle.push(styles.selectedText);
    }
    return (
      <View key={menuEntry}>
        <TouchableHighlight
          onPress={() => {
            this.props.onSelectMenu(menuEntry);
          }}
        >
          <View style={entryStyle}>
            <View style={styles.icon}>
              <Icon name={menuEntry} size={30} color="#000" />
            </View>
            <View style={styles.menuTextWrapper}>
              <Text style={entryTextStyle}>
                {menuEntry}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
        <View style={styles.separator} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  drawerContentWrapper: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white'
  },
  flag: { flex: 2, borderBottomWidth: 1, borderBottomColor: '#eeeeee' },
  listContainer: { flex: 6 },
  list: { backgroundColor: '#fff' },
  menuEntry: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    paddingLeft: 31,
    paddingRight: 16,
    flexDirection: 'row'
  },
  separator: { height: StyleSheet.hairlineWidth, backgroundColor: 'white' },
  menuTextWrapper: { flex: 1, justifyContent: 'center' },
  menuText: { textAlign: 'left', fontFamily: 'Roboto Medium', fontSize: 14 },
  icon: { width: 40 },
  selected: { backgroundColor: '#eee' },
  selectedText: { color: '#009688' }
});
