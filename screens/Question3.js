import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import Input from '../components/Input';
import Question from '../components/Question';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';

export default class Question3 extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[3, 11]} />
        <Content style={styles.content}>
          <Question title='What state are we in?' />
          <Input />
        </Content>
        <Footer next='Question4' />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  content: {},
});
