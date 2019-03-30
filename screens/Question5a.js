import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, View, Button } from 'native-base';

import sounds from '../assets/sounds';
import Input from '../components/Input';
import Question from '../components/Question';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';
import PlaySound from '../components/PlaySound';
import Microphone from '../components/Microphone';

export default class Question5a extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[5, 11]} />
        <Content style={styles.content}>
          <Question title='You have $100 and you go to the store and buy a dozen apples for $3 and a tricycle for $20.' />
          <View style={styles.extension}>
            <Text>A. How much did you spend?</Text>
          </View>
          <PlaySound file={sounds.sound2} />
          <Microphone />
        </Content>
        <Footer next='Question5b' />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  content: {},
  extension: {
    marginBottom: 32,
    fontSize: 17,
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
