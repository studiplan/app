import React, { PureComponent } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Constants from 'expo-constants';
import { AppLoading } from 'expo';
import { loadAsync } from 'expo-font';
import { StatusBar } from 'react-native';
import { View, Examples } from '@shoutem/ui';
import TopBar from './src/components/top-bar';

import TabNavigator from './src/components/tab-navigation';

const client = new ApolloClient({
  uri: 'http://192.168.2.119:4000',
});

export default class App extends PureComponent {
  state = {
    loaded: false,
  };

  async componentWillMount() {
    await loadAsync({
      'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
    });

    this.setState({ loaded: true });
  }

  render() {
    if (!this.state.loaded) return <AppLoading />;

    return (
      <ApolloProvider client={client}>
        <StatusBar barStyle='default' hidden={false} backgroundColor='black' />
        <View style={{ height: Constants.statusBarHeight, backgroundColor: 'black' }} />
        <TopBar title='Courses' />
        <TabNavigator />
      </ApolloProvider>
    );
  }
}
