import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Container, Content } from 'native-base';

import images from '../assets/images';
import Input from '../components/Input';
import Footer from '../components/Footer';

export default class Onboard1 extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <Content style={styles.content}>
          <View style={styles.logoContainer}>
            <Image source={images.brainage} style={styles.icon} />
          </View>
          <Text style={styles.text}>
            In order to get started please enter the following information
          </Text>
          <Input value='Name or Email' />
          <Input password value='Password' />
        </Content>
        <Footer nohelp next='Onboard2' />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {},
  logoContainer: {
    marginBottom: 48,
    alignItems: 'center',
  },
  text: {
    padding: 32,
    fontSize: 24,
    color: '#234D72',
    fontFamily: 'bold',
    alignItems: 'center',
  },
});
