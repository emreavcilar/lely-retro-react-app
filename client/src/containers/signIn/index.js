
import React, { useState } from 'react';
import InputText from 'components/inputText';
import { Link, useNavigate } from 'react-router-dom';
import {
  FORGOT_PASSWORD,
  HOME,
  SIGN_UP
} from 'config/constants/routePaths';
import { Button } from 'react-bootstrap';
import { isEmailValid } from 'utils/helpers';
import { signIn } from './actions';
import { useDispatch } from 'react-redux';
import './index.scss';
import lelyIcon from 'assets/icons/logo-lely.svg';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    setIsFormSubmitted(true);

    if (email && isEmailValid(email) && password) {
      // sign in action called with parameters.
      dispatch(signIn(email, password, (res) => {
        if (res) {
          navigate(HOME);
        }
      }));
    }
  }

  return (
    <>
      <div className='d-flex align-items-center vh-100'>
        <div className='sign-in-container container align-middle bg-white border rounded p-3'>
          <span className='d-flex justify-content-center'>
            <img alt='lely' src={lelyIcon} width='100' height='100' />
          </span>


          <InputText
            className="mb-2"
            inputClassName="w-100"
            placeholder="Email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            errorMessage={isFormSubmitted && (!email || !isEmailValid(email)) ? 'Please enter email' : ''}
          />

          <InputText
            type="password"
            inputClassName="w-100"
            placeholder="Password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            errorMessage={isFormSubmitted && !password ? 'Please enter password' : ''}
          />

          <span>* Use any e-mail and password to login</span>

          <Link to={FORGOT_PASSWORD} className="d-flex justify-content-center w-100 text-secondary my-3">Forgot your password</Link>

          <Button className="w-100" onClick={() => { onSubmit() }}>log in</Button>

          <span className='d-flex justify-content-center w-100 my-3'>
            Don't have an account? <Link to={SIGN_UP} className="text-secondary">Sign up</Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default SignIn;