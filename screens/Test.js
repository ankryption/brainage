import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Container, Content, Text, Button, Icon } from 'native-base';

import images from '../assets/images';

import Input from '../components/Input';
import Question from '../components/Question';
import HeaderBar from '../components/HeaderBar';

export default class Test extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[1, 11]} />
        <Content style={styles.content}>
          <Question text='What day of the week is it?' />
          <Input defaultValue='Enter text' />
        </Content>
        <View style={styles.footer}>
          <Button iconLeft transparent bordered style={styles.button}>
            <Icon name='home' />
            <Text>Home</Text>
          </Button>
          <Button iconLeft primary style={styles.button}>
            <Icon name='paper-plane' />
            <Text>Next</Text>
          </Button>
          <View style={styles.iconContainer}>
            <Image source={images.help} style={styles.icon} />
            <Text style={styles.iconTitle}>Help</Text>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  content: {},
  footer: {
    left: 0,
    bottom: 0,
    padding: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
  },
  button: {
    marginLeft: 8,
  },
});
