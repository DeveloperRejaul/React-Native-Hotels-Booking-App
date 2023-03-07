import React from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStack.js';
import MainStack from './MainStack.js';
import OnboardingUIStack from './OnboardingUIStack.js';
import SplassStack from './SplassStack.js';

const AuthRoute = ({Stack}) => {
  const state = useSelector(state => state);
  const {isLogin} = state.login;
  const {onbordingUI} = state.onboarding;
  const {splass} = state.splass;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      {<>{splass && SplassStack(Stack)}</>}
      {<>{onbordingUI && OnboardingUIStack(Stack)}</>}
      {!true ? <>{AuthStack(Stack)}</> : <>{MainStack(Stack)}</>}
    </Stack.Navigator>
  );
};

export default AuthRoute;
