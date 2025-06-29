import React, { useState } from 'react';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

export const Login = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  function onNext() {
    setStep((prev) => prev + 1);
  }

  return <Step onNext={onNext} />;
};

export default Login;
