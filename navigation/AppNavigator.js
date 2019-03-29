import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Test from '../screens/Test';
import Login from '../screens/Login';

export default createAppContainer(
  createSwitchNavigator({
    Home: Login,
    Test: Test,
  })
);
