import React from 'react';
import { StyleSheet, View, TextInput, Image, Text } from 'react-native';

import images from '../assets/images';

export default class Microphone extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image source={images.microphone} style={styles.icon} />
        <Text style={styles.iconTitle}>Touch to speak</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 32,
    top: 320,
    left: 160,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
  iconTitle: {
    padding: 4,
    fontSize: 10,
    maxWidth: 60,
    textAlign: 'center',
  },
});
