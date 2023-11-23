import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/auth/auth-operations';
import { useState } from 'react';
import { getAuthError, getIsRequest } from '../../Redux/auth/auth-selectors';
import LoginFormSchema from '../../schemas/LoginFormSchema';
import Svg from '../Svg/Svg';
import AuthHeader from '../AuthComponents/AuthHeader';
import AuthButton from '../AuthComponents/AuthButton';
import AuthFooter from '../AuthComponents/AuthFooter';
import AuthLabel from '../AuthComponents/AuthLabel';
import { authSlice } from '../../Redux/auth/auth-slice';
import {
  formStyles,
  inputStyles,
  passwordSuccess,
  wrapperError,
} from './basicStyles';
import { AuthInputWrapper } from '../AuthComponents/AuthInputWrapper';
import { AuthSvgWrapper } from '../AuthComponents/AuthSvgWrapper';
const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const httpError = useSelector(getAuthError);
  const isRequest = useSelector(getIsRequest);
  const axiosError = 'Email or password is invalid';
  const accessMessage = 'Password is secure';

  // toggle password
  const togglePasswordVisibility = (value) => {
    switch (value) {
      case 'password':
        setPasswordVisible(!passwordVisible);
        break;

      default:
        break;
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={() => {
        dispatch(authSlice.actions.resetHttpError());
      }}
      validationSchema={LoginFormSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={({ email, password }, { resetForm }) => {
        dispatch(login({ email, password }));
        resetForm();
      }}
    >
      {({ errors, setFieldError, values, setFieldValue }) => (
        <Form className={`${formStyles}`}>
          <AuthHeader header="Login" />

          <div className="flex flex-col gap-9 w-full">
            <AuthInputWrapper>
              <AuthLabel htmlFor="email" />
              <Field
                id="email"
                name="email"
                placeholder="Email"
                className={`${inputStyles} ${
                  errors['email'] ? 'border-[#F43F5E]' : null
                }`}
                onClick={() => {
                  setFieldError('email', '');
                }}
              />

              {errors['email'] && values['name'] !== '' && (
                <Svg
                  id="icon-cross"
                  className="right-3 absolute cursor-pointer"
                  onClick={() => {
                    setFieldValue('email', '');
                    setFieldError('email', '');
                  }}
                  stroke="#F43F5E"
                />
              )}

              <ErrorMessage
                name="email"
                component="div"
                className={`${wrapperError}`}
              />
            </AuthInputWrapper>

            <AuthInputWrapper>
              <AuthLabel htmlFor="password" />
              <Field
                id="password"
                name="password"
                placeholder="Password"
                type={passwordVisible ? 'text' : 'password'}
                className={`${inputStyles} ${
                  errors['password'] || httpError ? 'border-[#F43F5E]' : null
                } ${isRequest ? 'border-[#00C3AD]' : null} `}
                onClick={() => {
                  setFieldError('password', '');
                  dispatch(authSlice.actions.resetHttpError());
                }}
              />
              <AuthSvgWrapper>
                {isRequest ? (
                  <Svg
                    className="cursor-pointer"
                    id={'icon-check'}
                    fill="transparent"
                    stroke="#00C3AD"
                  />
                ) : null}

                <Svg
                  className="cursor-pointer"
                  onClick={() => togglePasswordVisibility('password')}
                  id={`${
                    passwordVisible ? `icon-eye-open` : `icon-eye-closed`
                  }`}
                  fill="transparent"
                  stroke="#54ADFF"
                />
              </AuthSvgWrapper>
              <ErrorMessage
                name="password"
                component="div"
                className={`${wrapperError}`}
              />
              {httpError === 401 ? (
                <div className={`${wrapperError}`}>{axiosError}</div>
              ) : null}

              {isRequest ? (
                <div className={`${passwordSuccess}`}>{accessMessage}</div>
              ) : null}
            </AuthInputWrapper>
          </div>

          <div className="w-full flex justify-center mt-[60px] mb-[20px] ">
            <AuthButton name="Login" />
          </div>
          <AuthFooter pathName="Register" />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
