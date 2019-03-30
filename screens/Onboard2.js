import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Container, Content } from 'native-base';

import images from '../assets/images';
import Input from '../components/Input';
import Footer from '../components/Footer';

export default class Question1 extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <Content style={styles.content}>
          <View style={styles.logoContainer}>
            <Image source={images.brainage} style={styles.icon} />
          </View>
          <Input keyboard='numeric' value='How old are you?' />
          <Text style={styles.heading}>Education Level</Text>
          <View style={styles.options}>
            <Image source={images.radioFilled} style={styles.radioFilled} />
            <Text style={styles.option}>High School Education</Text>
          </View>
          <View style={styles.options}>
            <Image source={images.radio} style={styles.radioFilled} />
            <Text style={styles.option}>Less than High School Education</Text>
          </View>
        </Content>
        <Footer nohelp next='Landing' />
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
  input: {
    width: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 48,
    alignItems: 'center',
  },
  heading: {
    padding: 32,
    fontSize: 24,
    color: '#234D72',
    fontFamily: 'bold',
    alignItems: 'center',
  },
  radioFilled: {
    width: 30,
    height: 30,
  },
  options: {
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    paddingLeft: 16,
  },
});
