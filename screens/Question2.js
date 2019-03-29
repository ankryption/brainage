import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import Input from '../components/Input';
import Question from '../components/Question';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';

export default class Question2 extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[2, 11]} />
        <Content style={styles.content}>
          <Question title='What is the year?' />
          <Input defaultValue='Enter text' />
        </Content>
        <Footer next='Question3' navigation={navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  content: {},
});
