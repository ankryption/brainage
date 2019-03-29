import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Container, Content, Text, Button, Icon } from 'native-base';

import Input from '../components/Input';
import Question from '../components/Question';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';

export default class Test extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[1, 11]} />
        <Content style={styles.content}>
          <Question text='What day of the week is it?' />
          <Input defaultValue='Enter text' />
        </Content>
        <Footer />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  content: {},
});
