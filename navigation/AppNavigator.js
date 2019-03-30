import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Question1 from '../screens/Question1';
import Question2 from '../screens/Question2';
import Question3 from '../screens/Question3';
import Question4 from '../screens/Question4';
import Question6 from '../screens/Question6';
import Question7 from '../screens/Question7';

export default createAppContainer(
  createSwitchNavigator({
    Home: Question7,
    Question1: Question1,
    Question2: Question2,
    Question3: Question3,
    Question4: Question4,
    Question6: Question6,
    Question7: Question7,
  })
);
