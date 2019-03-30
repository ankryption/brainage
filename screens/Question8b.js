import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content } from 'native-base';

import sounds from '../assets/sounds';
import Input from '../components/Input';
import Question from '../components/Question';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';
import PlaySound from '../components/PlaySound';
import Microphone from '../components/Microphone';

export default class Question8b extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[8, 11]} />
        <Content style={styles.content}>
          <Question title='You will now hear a series of numbers, once you ehear the numbers, recite them backwards.' />
          <View style={styles.extension}>
            <Text>i.e if you hear 47, you would say 74</Text>
          </View>
          <PlaySound file={sounds.sound2} />
          <Input />
          <Microphone />
        </Content>
        <Footer next='Question8c' />
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
