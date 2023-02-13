import React from 'react';
import OnboardingCom from './componant/OnboardingCom.jsx';
import {imagePhat} from '../../constent/imagePhat.js';
import {COLORS} from '../../constent/colors.js';
import {useDispatch} from 'react-redux';
import {handelOnbordingUI} from '../../redux/features/onboardingUI/oboardingUISlice.js';

export default function Onboarding03({}) {
  const dispatch = useDispatch();

  return (
    <OnboardingCom
      imagePhat={imagePhat.onbording02}
      onPress={() => dispatch(handelOnbordingUI())}
      btnText={'Get Start'}
      indicator3={{backgroundColor: COLORS.green}}
    />
  );
}
