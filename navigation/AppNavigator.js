import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Question1 from '../screens/Question1';
import Question2 from '../screens/Question2';
import Question3 from '../screens/Question3';

export default createAppContainer(
  createSwitchNavigator({
    Home: Login,
    Question1: Question1,
    Question2: Question2,
    Question3: Question3,
  })
);
