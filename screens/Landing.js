import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Container, Content, Button } from 'native-base';

import images from '../assets/images';

export default class Landing extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container style={styles.wrapper}>
        <Content style={styles.content}>
          <View style={styles.logoContainer}>
            <Image source={images.brainage} style={styles.icon} />
            <Image source={images.user} style={styles.user} />
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>TAKE THE TEST</Text>
            <Button
              style={styles.button}
              onPress={() => navigation.navigate('Instruction1')}
            >
              <Text style={styles.buttonText}>Start</Text>
            </Button>
          </View>
        </Content>
        <View style={styles.tabContainer}>
          <Image source={images.tab} style={styles.tab} />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    margin: 30,
  },
  logoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 48,
  },
  container: {
    margin: 64,
  },
  text: {
    width: 200,
    padding: 8,
    fontSize: 22,
    textAlign: 'center',
  },
  button: {
    width: 200,
    height: 100,
    borderWidth: 1,
    borderColor: '#979797',
    justifyContent: 'center',
    backgroundColor: '#D8D8D8',
  },
  buttonText: {
    fontSize: 32,
    fontFamily: 'italics',
  },
  buttonContainer: {
    marginTop: 90,
  },
  tab: {
    width: '100%',
  },
  user: {
    width: 30,
    height: 30,
  },
});
