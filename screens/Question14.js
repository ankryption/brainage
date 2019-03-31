import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content } from 'native-base';

import sounds from '../assets/sounds';
import images from '../assets/images';
import Question from '../components/Question';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';
import PlaySound from '../components/PlaySound';

export default class Question14 extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[14, 19]} />
        <Content style={styles.content}>
          <Question title='Which of the figures is the largest?' />
          <PlaySound file={sounds.sound2} />
          <Image source={images.shapes} style={styles.shapes} />
        </Content>
        <Footer next='Question15' />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  content: {},
  shapes: {
    marginTop: 30,
    marginLeft: 60,
    justifyContent: 'center',
  },
});
