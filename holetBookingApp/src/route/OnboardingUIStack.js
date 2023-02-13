import * as React from 'react';
import {comName} from '../constent/componentName.js';
import Onboarding01 from '../screen/onboarding-screen/Onboarding01.js';
import Onboarding02 from '../screen/onboarding-screen/Onboarding02.js';
import Onboarding03 from '../screen/onboarding-screen/Onboarding03.js';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={comName.onboarding01} component={Onboarding01} />
      <Stack.Screen name={comName.onboarding02} component={Onboarding02} />
      <Stack.Screen name={comName.onboarding03} component={Onboarding03} />
    </>
  );
}
