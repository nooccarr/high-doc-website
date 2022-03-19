import React from 'react';

import { SignUpLoginButtonWrap } from './SignUpLoginButtonStyles';

const SignUpLoginButton = () => (
  <SignUpLoginButtonWrap>
    <button className='signup'>Sign up</button>
    <button className='login'>Login</button>
  </SignUpLoginButtonWrap>
);

export default SignUpLoginButton;