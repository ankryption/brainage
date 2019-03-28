import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Question from '../screens/Question';

export default createAppContainer(
  createSwitchNavigator({
    Home: Question,
  })
);
