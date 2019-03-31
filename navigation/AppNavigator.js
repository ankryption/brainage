import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Landing from '../screens/Landing';
import Onboard1 from '../screens/Onboard1';
import Onboard2 from '../screens/Onboard2';
import Question1 from '../screens/Question1';
import Question2 from '../screens/Question2';
import Question3 from '../screens/Question3';
import Question4 from '../screens/Question4';
import Question5 from '../screens/Question5';
import Question6 from '../screens/Question6';
import Question7 from '../screens/Question7';
import Question8 from '../screens/Question8';
import Question9 from '../screens/Question9';
import Question10 from '../screens/Question10';
import Question11 from '../screens/Question11';
import Question12 from '../screens/Question12';
import Question13 from '../screens/Question13';
import Question14 from '../screens/Question14';
import Question15 from '../screens/Question15';
import Question16 from '../screens/Question16';
import Question17 from '../screens/Question17';
import Question18 from '../screens/Question18';
import Question19 from '../screens/Question19';
import Instruction1 from '../screens/Instruction1';

export default createAppContainer(
  createSwitchNavigator({
    Home: Question5,
    Landing: Landing,
    Onboard1: Onboard1,
    Onboard2: Onboard2,
    Question1: Question1,
    Question2: Question2,
    Question3: Question3,
    Question4: Question4,
    Question5: Question5,
    Question6: Question6,
    Question7: Question7,
    Question8: Question8,
    Question9: Question9,
    Question10: Question10,
    Question11: Question11,
    Question12: Question12,
    Question13: Question13,
    Question14: Question14,
    Question15: Question15,
    Question16: Question16,
    Question17: Question17,
    Question18: Question18,
    Question19: Question19,
    Instruction1: Instruction1,
  })
);
