import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Text, Header, Body } from 'native-base';

import sounds from '../assets/sounds';
import Input from '../components/Input';
import Question from '../components/Question';
import Footer from '../components/Footer';
import PlaySound from '../components/PlaySound';

export default class SignUpTwo extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <Content style={styles.content}>
          <Header>
            <Body>
              <Text style={styles.text}> BRAIN/AGE </Text>
            </Body>
          </Header>
            <Question title='Please Enter or Select your Education Level'/>
            <PlaySound file={sounds.sound2} />
            <Input />
            <Button
              color="#0AEEF1"
              iconLeft
              style={styles.button}
            />
              <Text> High School Education </Text>
            <Button
              color="#0AEEF1"
              iconLeft
              style={styles.button}
            />
              <Text> Less Than High School Education </Text>
        </Content>
        <Footer next='Question1' />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {},
  button: {
    borderWidth:1,
    borderColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    width:30,
    height:30,
    backgroundColor:'#fff',
    borderRadius:50,
  },
  text: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
  },
});
