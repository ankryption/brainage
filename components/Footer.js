import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Button, Icon } from 'native-base';
import { withNavigation } from 'react-navigation';

import images from '../assets/images';

class Footer extends React.Component {
  render() {
    const { navigation, next } = this.props;

    return (
      <View style={styles.wrapper}>
        <View>
          <Button transparent bordered style={styles.button}>
            <Icon name='home' />
            <Text style={{ color: '#000' }}>Home</Text>
          </Button>
        </View>
        <View style={styles.help}>
          <Image source={images.help} style={styles.icon} />
          <Text style={styles.iconTitle}>Help</Text>
        </View>
        <View>
          <Button
            iconLeft
            primary
            style={styles.button}
            onPress={() => navigation.navigate(next)}
          >
            <Icon name='paper-plane' />
            <Text style={{ color: '#fff' }}>Next</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    width: '100%',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    padding: 8,
    minWidth: 80,
  },
  buttonText: {
    color: '#fff',
  },
  help: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
});

export default withNavigation(Footer);
