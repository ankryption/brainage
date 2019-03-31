import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content } from 'native-base';

import sounds from '../assets/sounds';
import images from '../assets/images';
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
          <Image source={images.time} style={styles.time} />
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
  time: {
    marginTop: 70,
    marginLeft: 130,
    justifyContent: 'center',
  },
});
