import React, { PureComponent } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Constants from 'expo-constants';
import { AppLoading } from 'expo';
import { StatusBar, View } from 'react-native';
import TopBar from './src/components/top-bar';

import TabNavigator from './src/components/tab-navigation';

const client = new ApolloClient({
  uri: 'http://192.168.2.119:4000',
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle='default' hidden={false} backgroundColor='black' />
      <View style={{ height: Constants.statusBarHeight, backgroundColor: 'black' }} />
      <TabNavigator />
    </ApolloProvider>
  );
}
