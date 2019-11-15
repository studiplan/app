import React, { Component } from 'react';
import TopBar from '../components/top-bar';
import { Text, View } from 'react-native';

export default class CoursesScreen extends Component {
  render() {
    return (
      <View>
        <TopBar title='Courses' />
        <Text>test1</Text>
      </View>
    );
  }
}
