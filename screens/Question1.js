import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import sounds from '../assets/sounds';
import Input from '../components/Input';
import Footer from '../components/Footer';
import Question from '../components/Question';
import HeaderBar from '../components/HeaderBar';
import PlaySound from '../components/PlaySound';
import Microphone from '../components/Microphone';

export default class Question1 extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[1, 19]} />
        <Content style={styles.content}>
          <Question title='What day of the week is it?' />
          <PlaySound file={sounds.sound2} />
          <Input />
          <Microphone />
        </Content>
        <Footer next='Question2' />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  content: {},
});
