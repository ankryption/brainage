import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Container, Content, Button } from 'native-base';

import images from '../assets/images';
import HeaderBar from '../components/HeaderBar';

export default class Results extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container style={styles.wrapper}>
        <Content style={styles.content}>
          <HeaderBar text='Results' />
          <View style={styles.logoContainer}>
            <Image source={images.results} style={styles.results} />
          </View>
          <View style={styles.logoContainer}>
            <Image source={images.score} style={styles.score} />
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>User 1</Text>
            <Text style={styles.text}>Age: 78</Text>
            <Text style={styles.text}>Education: College</Text>
            <Text style={styles.text}>Last Test: 03/30/2019</Text>
            <Text style={styles.text}>Score: 17</Text>
            <Text style={styles.text}>Average: 23</Text>
          </View>
          <Image source={images.mascot} style={styles.mascot} />
          <View style={styles.container}>
            <Image source={images.share} style={styles.share} />
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
    backgroundColor: '#A4AABA',
  },
  container: {},
  results: {
    marginTop: 30,
    marginLeft: 35,
  },
  score: {
    marginLeft: 20,
    marginTop: 20,
  },
  share: {
    left: 10,
    bottom: 0,
  },
  container: {
    width: 200,
    padding: 8,
    textAlign: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  mascot: {
    marginLeft: 280,
    marginTop: 430,
    position: 'absolute',
  },
});
