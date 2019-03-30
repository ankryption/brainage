import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Header, Text, Body } from 'native-base';

import sounds from '../assets/sounds';
import Input from '../components/Input';
import Question from '../components/Question';
import Footer from '../components/Footer';
import PlaySound from '../components/PlaySound';

export default class SignUpOne extends React.Component {
  render() {
    return (
       <Container style={styles.wrapper}>
         <Content style={styles.content}>
          <Header>
            <Body>
              <Text style={styles.text}> BRAIN/AGE </Text>
            </Body>
          </Header>
            <Question title='In order to get started, please enter the following information'/>
            <PlaySound file={sounds.sound2} />
            <Input />
            <Input />
         </Content>
         <Footer next='SignUpTwo' />
       </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  content: {},
  text: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
  },
});
