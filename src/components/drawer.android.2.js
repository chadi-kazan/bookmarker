import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@exponent/ex-navigation";
import Router from "../router";

const DRAWER_WIDTH_LEFT = 56;
export default class DrawerNavigationLayout extends Component {
  static route = { navigationBar: { visible: false } };

  render() {
    return (
      <DrawerLayoutAndroid
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerWidth={Dimensions.get("window") - DRAWER_WIDTH_LEFT}
        keyboardDismissMode="on-drag"
        onDrawerOpen={() => {
          this._overrideBackPressForDrawerLayout = true;
        }}
        onDrawerClose={() => {
          this._overrideBackPressForDrawerLayout = false;
        }}
        ref={drawer => {
          this._drawer = drawer;
        }}
        statusBarBackgroundColor="#ddd"
        renderNavigationView={this._renderMenus.bind(this, this.props)}
      >
        {this._renderView()}
      </DrawerLayoutAndroid>
    );
  }

  _renderMenus(props) {
    return <Text>Text</Text>;
  }

  _renderView() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbarContainer}>
          <Icon.ToolbarAndroid
            style={styles.toolbar}
            titleColor={"#000"}
            navIconName={"menu"}
            iconColor="white"
            iconSize={45}
            onIconClicked={() => this._drawer.openDrawer()}
            title=""
          />
        </View>
        <View style={styles.content}>
          {this._renderComponents()}
        </View>
      </View>
    );
  }

  _renderComponents() {
    return (
      <DrawerNavigation
        id="main"
        initialItem="home"
        drawerWidth={300}
        renderHeader={this._renderHeader}
      >
        <DrawerNavigationItem
          id="home"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("home", isSelected)}
        >
          <StackNavigation id="home" initialRoute={Router.getRoute("home")} />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="settings"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("settings", isSelected)}
        >
          <StackNavigation
            id="settings"
            initialRoute={Router.getRoute("settings")}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }

  _renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text>{"Header"}</Text>
      </View>
    );
  };

  _renderTitle(text: string, isSelected: boolean) {
    return (
      <View
        style={[ styles.menuEntry, isSelected ? styles.selectedItemStyle : {} ]}
      >
        <View style={styles.icon}>
          <Icon name={text} size={30} color="#000" />
        </View>
        <View style={styles.menuTextWrapper}>
          <Text
            style={[
              styles.titleText,
              isSelected ? styles.selectedTitleText : {}
            ]}
          >
            {text}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: { height: 20 },
  menuTextWrapper: { flex: 1, justifyContent: "center" },
  menuEntry: {
    backgroundColor: "white",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    paddingLeft: 31,
    paddingRight: 16,
    flexDirection: "row"
  },
  selectedItemStyle: { backgroundColor: "#eee" },
  titleText: {
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "Roboto Medium",
    fontSize: 14
  },
  selectedTitleText: { color: "#009688" },
  container: { flex: 1, flexDirection: "column" },
  toolbar: { height: 56, backgroundColor: "#009688", alignItems: "center" },
  content: { flex: 1 }
});
