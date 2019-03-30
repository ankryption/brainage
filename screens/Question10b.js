import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import sounds from '../assets/sounds';
import Question from '../components/Question';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';
import PlaySound from '../components/PlaySound';

export default class Question10b extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[10, 11]} />
        <Content style={styles.content}>
          <Question title='Which of the figures is the largest?' />
          <PlaySound file={sounds.sound2} />
        </Content>
        <Footer next='Question11' />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  content: {},
});
