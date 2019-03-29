import React from 'react';
import { Audio } from 'expo';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

import images from '../assets/images';
import sounds from '../assets/sounds';

export default class Question extends React.Component {
  constructor(props) {
    super(props);

    this._playSound = this._playSound.bind(this);
  }

  async _playSound() {
    const soundObject = new Audio.Sound();

    try {
      await soundObject.loadAsync(sounds.sound2);
      await soundObject.playAsync();
      // the _playSound is playing!
    } catch (error) {
      // An error occurred!
    }
  }
  render() {
    const { title } = this.props;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.question}>{title}</Text>
        <TouchableHighlight underlayColor='#fff' onPress={this._playSound}>
          <View style={styles.iconContainer}>
            <Image source={images.speaker} style={styles.icon} />
            <Text style={styles.iconTitle}>Hear Question</Text>
          </View>
        </TouchableHighlight>
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
