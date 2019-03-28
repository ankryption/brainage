import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import images from '../assets/images';

export default class Question extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.question}>{text}</Text>
        <View style={styles.iconContainer}>
          <Image source={images.speaker} style={styles.icon} />
          <Text style={styles.iconTitle}>Hear Question</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  question: {
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainer: {
    flex: 1,
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
