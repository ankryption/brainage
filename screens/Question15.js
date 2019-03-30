import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Container, Content } from 'native-base';

import sounds from '../assets/sounds';
import Footer from '../components/Footer';
import Question from '../components/Question';
import HeaderBar from '../components/HeaderBar';
import PlaySound from '../components/PlaySound';

export default class Question15 extends React.Component {
  render() {
    return (
      <Container style={styles.wrapper}>
        <HeaderBar question={[15, 19]} />
        <Content style={styles.content}>
          <Question title='Please read or listen to the story carefully. We will ask you some some questions about it on the next page.' />
          <View style={styles.extension}>
            <Text style={styles.extensionText}>
              Jill was a very successful stockbroker. She made a lot of money on
              the stock market. She then met Jack, a devastatingly handsome man.
              She married him and had three children. They lived in Chicago. She
              then stopped work and stayed at home to bring up her children.
              When they were teenagers, she went back to work. She and Jack
              lived happily ever after.
            </Text>
          </View>
          <PlaySound file={sounds.sound2} />
        </Content>
        <Footer next='Question16' />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  content: {},
  extension: {
    margin: 32,
    marginTop: 2,
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  extensionText: {
    lineHeight: 18,
  },
});
