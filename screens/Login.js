import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Container, Content, Text, Button, Icon } from 'native-base';

export default class Login extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container style={styles.wrapper}>
        <Content style={styles.content}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>BRAINAGE</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              onPress={() => navigation.navigate('Question1')}
            >
              <Text style={{ color: '#fff' }}>SignUp</Text>
            </Button>
            <Button
              info
              style={styles.button}
              onPress={() => navigation.navigate('Question1')}
            >
              <Text style={{ color: '#fff' }}>Login</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  content: {},
  logoContainer: {
    padding: 16,
    height: 128,
    marginTop: 64,
  },
  logoText: {
    fontSize: 32,
    textAlign: 'center',
  },
  button: {
    margin: 16,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
