import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { AntDesign as Icon } from '@expo/vector-icons';
import { Text, View } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, home!</Text>
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

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
	tabBarIcon: ({ focused, tintColor }) => {
	  return <Icon name='home' size={25} color={tintColor} />;
	},
      }),
    },
    Settings: {
      screen: SettingScreen,
      navigationOptions: ({ navigation }) => ({
	tabBarIcon: ({ focused, tintColor }) => {
	  return <Icon name='setting' size={25} color={tintColor} />;
	},
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);
