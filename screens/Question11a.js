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

export default class Question11a extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[11, 11]} />
        <Content style={styles.content}>
          <Question title='What was the female character’s name?' />
          <PlaySound file={sounds.sound2} />
          <Input />
          <Microphone />
        </Content>
        <Footer next='Question11b' />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  content: {},
});
