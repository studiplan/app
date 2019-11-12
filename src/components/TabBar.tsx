import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { AntDesign as Icon } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import lang from '../core/language';
import color from '../core/colors';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, bla!</Text>
      </View>
    );
  }
}

class SettingScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, settings!</Text>
      </View>
    );
  }
}

function getIcon(ident: string) {
  return ({ tintColor }) => (<Icon name={ident} size={25} color={tintColor} />);
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
	tabBarIcon: getIcon('home'),
	title: lang.tabHome,
      }),
    },
    Settings: {
      screen: SettingScreen,
      navigationOptions: ({ navigation }) => ({
	tabBarIcon: getIcon('setting'),
	title: lang.tabSettings,
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: color.tabActive,
      inactiveTintColor: color.tabInactive,
    },
  }
);

export default createAppContainer(TabNavigator);
