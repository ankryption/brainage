import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Question1 from '../screens/Question1';
import Question2 from '../screens/Question2';

export default createAppContainer(
  createSwitchNavigator({
    Home: Login,
    Question1: Question1,
    Question2: Question2,
  })
);
