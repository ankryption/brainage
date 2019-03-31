import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Body, Text } from 'native-base';

export default class HeaderBar extends React.Component {
  render() {
    const { question, text } = this.props;

    return (
      <Header>
        <Body>
          {question && question[0] && question[1] ? (
            <Text style={styles.text}>
              Question {question[0]} of {question[1]}
            </Text>
          ) : (
            <Text style={styles.text}>{text}</Text>
          )}
        </Body>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
  },
});
