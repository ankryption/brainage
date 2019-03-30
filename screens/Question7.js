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

export default class Question7 extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[7, 19]} />
        <Content style={styles.content}>
          <Question title='Name as many animals as you can in 1 minute' />
          <PlaySound file={sounds.sound2} />
          <Microphone />
        </Content>
        <Footer next='Question8' />
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
