import React from 'react';
import { StyleSheet, View, TextInput, Image, Text } from 'react-native';

import images from '../assets/images';

export default class Input extends React.Component {
  render() {
    const { value } = this.props;

    return (
      <View>
        <View style={styles.wrapper}>
          <TextInput
            maxLength={40}
            editable={true}
            style={styles.input}
            defaultValue={value ? value : 'Enter text'}
          />
        </View>
        {/* <View style={styles.iconContainer}>
          <Image source={images.microphone} style={styles.icon} />
          <Text style={styles.iconTitle}>Touch to speak</Text>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    marginTop: 60,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  input: {
    fontSize: 24,
    color: 'grey',
    alignSelf: 'center',
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
