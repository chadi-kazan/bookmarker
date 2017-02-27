import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
	navigation: any,
	banner: string,
	containerStyle: any
};
const styles = StyleSheet.create({
	toolbarStyle: {
    height: 56,
	backgroundColor: '#009688',
	alignItems: 'center'
  }
});
const ScreenHeader = ({navigation, banner, containerStyle}: Props) => (
    <View style={containerStyle}>
						<Icon.ToolbarAndroid style={styles.toolbarStyle} titleColor={'#000'}
							navIconName={'menu'} iconColor="white" iconSize={45}
							onIconClicked={() => navigation.navigate('DrawerOpen')}
							title=""
						/>
					</View>
);
ScreenHeader.propTypes = {
    navigation: PropTypes.object.isRequired,
    banner: PropTypes.string,
	containerStyle: PropTypes.object
};
export default ScreenHeader;

