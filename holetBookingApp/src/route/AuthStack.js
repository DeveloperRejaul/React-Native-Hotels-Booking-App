import * as React from 'react';
import {comName} from '../constent/componentName.js';
import ForgotPassword from '../screen/forgot-password-screen/ForgotPassword.jsx';
import Login from '../screen/login-screen/Login.jsx';
import ResetPassword from '../screen/reset-password-screen/ResetPassword.jsx';
import Signup from '../screen/signup-screen/Signup.jsx';
import WelcomeShooseOption from '../screen/welcome-shoose-screen/WelcomeShooseOption.js';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={comName.WelcomeShooseOption}
        component={WelcomeShooseOption}
      />
      <Stack.Screen name={comName.Login} component={Login} />
      <Stack.Screen name={comName.Signup} component={Signup} />
      <Stack.Screen name={comName.forgotPassword} component={ForgotPassword} />
      <Stack.Screen name={comName.resetPassword} component={ResetPassword} />
    </>
  );
}
