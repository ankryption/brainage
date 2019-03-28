import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Test from '../screens/Test';

export default createAppContainer(
  createSwitchNavigator({
    Home: Test,
  })
);
