import * as React from 'react';
import {comName} from '../constent/componentName.js';
import SplassScreen from '../screen/splass-screen/SplassScreen.js';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={comName.spless} component={SplassScreen} />
    </>
  );
}
