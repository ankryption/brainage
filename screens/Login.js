import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Container, Content, Text, Button, Icon } from 'native-base';

import images from '../assets/images';

export default class Login extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container style={styles.wrapper}>
        <View style={styles.logoContainer}>
          <Image source={images.brainage} style={styles.icon} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            info
            style={styles.button}
            onPress={() => navigation.navigate('Question1')}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </Button>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate('Onboard1')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    padding: 16,
    height: 128,
    marginTop: 128,
  },
  button: {
    margin: 16,
    width: 128,
    height: 64,
    borderWidth: 1,
    borderColor: '#979797',
    justifyContent: 'center',
    backgroundColor: '#D8D8D8',
  },
  buttonText: {
    color: '#000',
    fontFamily: 'italics',
    fontSize: 24,
  },
  buttonContainer: {
    marginTop: 90,
  },
});
