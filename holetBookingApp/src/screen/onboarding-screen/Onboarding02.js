import React from 'react';
import OnboardingCom from './componant/OnboardingCom.jsx';
import {imagePhat} from '../../constent/imagePhat.js';
import {comName} from '../../constent/componentName.js';
import {COLORS} from '../../constent/colors.js';

export default function Onboarding02({navigation}) {
  return (
    <OnboardingCom
      imagePhat={imagePhat.onbording02}
      onPress={() => navigation.navigate(comName.onboarding03)}
      btnText={'Next'}
      indicator2={{backgroundColor: COLORS.green}}
    />
  );
}
