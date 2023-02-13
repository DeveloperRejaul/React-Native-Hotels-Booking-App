import React from 'react';
import OnboardingCom from './componant/OnboardingCom.jsx';
import {imagePhat} from '../../constent/imagePhat.js';
import {comName} from '../../constent/componentName.js';
import {COLORS} from '../../constent/colors.js';

export default function Onboarding01({navigation}) {
  return (
    <OnboardingCom
      imagePhat={imagePhat.onbording01}
      onPress={() => navigation.navigate(comName.onboarding02)}
      btnText={'Next'}
      indicator1={{backgroundColor: COLORS.green}}
    />
  );
}
