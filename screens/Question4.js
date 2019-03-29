import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Content, View, Button } from 'native-base';

import sounds from '../assets/sounds';
import Input from '../components/Input';
import Question from '../components/Question';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';
import PlaySound from '../components/PlaySound';

export default class Question4 extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[4, 11]} />
        <Content style={styles.content}>
          <Question
            hide-icon='true'
            title='Please remember these 5 objects. We will ask you what they are again at a later time?'
          />
          <View style={styles.extension}>
            <Text>Apple, Pen, Tie, House, Car</Text>
          </View>
          <PlaySound file={sounds.sound2} />
          <Input />
        </Content>
        <Footer next='Question5' />
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
