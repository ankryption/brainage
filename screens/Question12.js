import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Container, Content, Button } from 'native-base';

import sounds from '../assets/sounds';
import images from '../assets/images';
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
          <Image source={images.clock} style={styles.clock} />
          <Image source={images.clear} style={styles.clear} />
          <Button
            style={styles.button}
            onPress={() => navigation.navigate('Instruction1')}
          />
        </Content>
        <Footer nohelp next='Question13' />
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
  clock: {
    marginTop: 10,
    marginLeft: 105,
    justifyContent: 'center',
  },
  clear: {
    width: 40,
    height: 40,
    marginTop: 380,
    marginLeft: 320,
    position: 'absolute',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 200,
    marginTop: 20,
    marginLeft: 20,
    justifyContent: 'center',
    backgroundColor: '#979797',
  },
  buttonText: {
    fontSize: 32,
    fontFamily: 'italics',
  },
  buttonContainer: {
    marginTop: 90,
  },
});
