import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { AntDesign as Icon } from '@expo/vector-icons';

import ScheduleScreen from '../screens/schedule';
import CoursesScreen from '../screens/courses';
import SettingScreen from '../screens/settings';

import lang from '../core/language';
import color from '../core/colors';

function getIcon(ident: string) {
  return ({ tintColor }) => (<Icon name={ident} size={25} color={tintColor} />);
}

const TabNavigator = createBottomTabNavigator(
  {
    Schedule: {
      screen: ScheduleScreen,
      navigationOptions: ({ navigation }) => ({
	tabBarIcon: getIcon('calendar'),
	title: lang.tabSchedule,
      }),
    },
    Courses: {
      screen: CoursesScreen,
      navigationOptions: ({ navigation }) => ({
	tabBarIcon: getIcon('rocket1'),
	title: lang.tabCourses,
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
    initialRouteName: 'Courses',
    tabBarOptions: {
      activeTintColor: color.tabActive,
      inactiveTintColor: color.tabInactive,
    },
  }
);

export default createAppContainer(TabNavigator);
