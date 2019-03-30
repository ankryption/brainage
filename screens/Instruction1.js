import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content } from 'native-base';

import sounds from '../assets/sounds';
import Footer from '../components/Footer';
import Question from '../components/Question';
import PlaySound from '../components/PlaySound';

export default class Instruction1 extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <View style={styles.view} />
        <Text style={styles.text}>Click here to hear the question</Text>
        <Content style={styles.content}>
          <Question title='What day of the week is it?' />
          <View style={styles.visible}>
            <PlaySound
              style={styles.icon}
              title={styles.title}
              file={sounds.sound2}
            />
          </View>
        </Content>
        <Footer next='Question1' />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#979797',
  },
  text: {
    fontSize: 18,
    color: '#fff',
    position: 'absolute',
    fontFamily: 'bold',
    top: 220,
    left: 50,
  },
  content: {
    marginTop: 40,
  },
  visible: {
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 80,
    left: 140,
  },
  icon: {
    top: 5,
    left: 20,
    position: 'relative',
    justifyContent: 'center',
  },
  title: {
    top: 5,
    left: -10,
    position: 'relative',
    fontSize: 10,
    maxWidth: 60,
    textAlign: 'center',
  },
});
