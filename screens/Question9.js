import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content } from 'native-base';

import sounds from '../assets/sounds';
import Input from '../components/Input';
import Question from '../components/Question';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';
import PlaySound from '../components/PlaySound';
import Microphone from '../components/Microphone';

export default class Question9 extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[9, 11]} />
        <Content style={styles.content}>
          <Question title='This is a clock face, please put the hour markers and the time, ten minutes to eleven o`clock.' />
          <PlaySound file={sounds.sound2} />
        </Content>
        <Footer next='Question10a' />
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
