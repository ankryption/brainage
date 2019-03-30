import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Button, Icon, Grid, Col } from 'native-base';
import { withNavigation } from 'react-navigation';

import images from '../assets/images';

class Footer extends React.Component {
  render() {
    let { navigation, next, text } = this.props;
    if (!text) text = 'Next';

    return (
      <Grid style={styles.wrapper}>
        <Col style={styles.left}>
          <View style={styles.help}>
            <Image source={images.help} style={styles.icon} />
            <Text style={styles.iconTitle}>Help</Text>
          </View>
        </Col>
        <Col style={styles.right}>
          <View style={styles.next}>
            <Button
              iconRight
              style={styles.button}
              onPress={() => navigation.navigate(next)}
            >
              <Icon name='paper-plane' />
              <Text style={styles.buttonText}>{text}</Text>
            </Button>
          </View>
        </Col>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    position: 'absolute',
  },
  left: {
    alignItems: 'flex-start',
  },
  help: {
    alignItems: 'center',
  },
  right: {
    alignItems: 'flex-end',
  },
  next: {
    alignItems: 'center',
  },
  button: {
    padding: 16,
    minWidth: 80,
    borderRadius: 16,
    backgroundColor: '#D8D8D8',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default withNavigation(Footer);
