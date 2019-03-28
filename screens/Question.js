import React from 'react';
import { StyleSheet, Image, TextInput, View } from 'react-native';
import {
  Container,
  Header,
  Content,
  Body,
  Text,
  Button,
  Icon,
} from 'native-base';
import images from '../assets/images';
export default class Question extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Text style={styles.header}>Question 1 of 11</Text>
          </Body>
        </Header>
        <Content style={styles.content}>
          <Text style={styles.question}>What day of the week is it?</Text>
          <View style={styles.iconContainer}>
            <Image source={images.speaker} style={styles.icon} />
            <Text style={styles.iconTitle}>Hear Question</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              editable={true}
              maxLength={40}
              defaultValue='Enter text'
            />
          </View>
          <View style={styles.iconContainer}>
            <Image source={images.microphone} style={styles.icon} />
            <Text style={styles.iconTitle}>Touch to speak</Text>
          </View>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  content: {},
  question: {
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
  iconTitle: {
    padding: 4,
    fontSize: 10,
    maxWidth: 60,
    textAlign: 'center',
  },
  inputWrapper: {
    marginTop: 60,
    marginLeft: 60,
    marginRight: 60,
    marginBottom: 20,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  input: {
    fontSize: 24,
    alignSelf: 'center',
  },
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
