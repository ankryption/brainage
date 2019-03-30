import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import sounds from '../assets/sounds';
import Question from '../components/Question';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';
import PlaySound from '../components/PlaySound';

export default class Question12 extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[12, 19]} />
        <Content style={styles.content}>
          <Question title='This is a clock face, please put the hour markers and the time, ten minutes to eleven o`clock.' />
          <PlaySound file={sounds.sound2} />
        </Content>
        <Footer next='Question13' />
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
