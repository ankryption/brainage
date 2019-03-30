import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Question1 from '../screens/Question1';
import Question2 from '../screens/Question2';
import Question3 from '../screens/Question3';
import Question4 from '../screens/Question4';
import Question5a from '../screens/Question5a';
import Question5b from '../screens/Question5b';
import Question6 from '../screens/Question6';
import Question7 from '../screens/Question7';
import Question8a from '../screens/Question8a';
import Question8b from '../screens/Question8b';
import Question8c from '../screens/Question8c';
import Question11 from '../screens/Question11';
import Question11a from '../screens/Question11a';
import Question11b from '../screens/Question11b';
import Question11c from '../screens/Question11c';
import Question11d from '../screens/Question11d';

export default createAppContainer(
  createSwitchNavigator({
    Home: Question4,
    Question1: Question1,
    Question2: Question2,
    Question3: Question3,
    Question4: Question4,
    Question5a: Question5a,
    Question5b: Question5b,
    Question6: Question6,
    Question7: Question7,
    Question8a: Question8a,
    Question8b: Question8b,
    Question8c: Question8c,
    Question11: Question11,
    Question11a: Question11a,
    Question11b: Question11b,
    Question11c: Question11c,
    Question11d: Question11d,
  })
);
