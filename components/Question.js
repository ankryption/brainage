import React from 'react';
import { Audio } from 'expo';
import { StyleSheet, View, Text } from 'react-native';

export default class Question extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  title: {
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'italics',
  },
});
