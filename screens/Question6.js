import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Container, Content, View } from 'native-base';

import sounds from '../assets/sounds';
import images from '../assets/images';
import Question from '../components/Question';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';
import PlaySound from '../components/PlaySound';
import Microphone from '../components/Microphone';

export default class Question6 extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[6, 19]} />
        <Content style={styles.content}>
          <Question title='You have $100 and you go to the store and buy a dozen apples for $3 and a tricycle for $20.' />
          <View style={styles.extension}>
            <Text>A. How much do you have left?</Text>
          </View>
          <PlaySound file={sounds.sound2} />
          <Image source={images.input} style={styles.input} />
          <Microphone />
        </Content>
        <Footer next='Question7' />
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
  input: {
    marginTop: 30,
    marginLeft: 110,
    justifyContent: 'center',
  },
});
