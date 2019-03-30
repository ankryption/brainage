import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/help.png'),
        require('./assets/images/speaker.png'),
        require('./assets/images/microphone.png'),
      ]),
      Font.loadAsync({
        regular: require('./assets/fonts/OpenSans-Regular.ttf'),
        bold: require('./assets/fonts/OpenSans-Bold.ttf'),
        italics: require('./assets/fonts/OpenSans-Italic.ttf'),
      }),
    ]);
  };

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'regular',
    backgroundColor: '#fff',
  },
});
