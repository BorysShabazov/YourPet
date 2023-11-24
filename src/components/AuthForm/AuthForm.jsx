import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { register } from '../../Redux/auth/auth-operations';
import { getAuthError, getIsRequest } from '../../Redux/auth/auth-selectors';
import AuthFormSchema from '../../schemas/AuthFormSchema';
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
} from '../LoginForm/auth-styles';
import { AuthInputWrapper } from '../AuthComponents/AuthInputWrapper';
import { AuthSvgWrapper } from '../AuthComponents/AuthSvgWrapper';

const AuthForm = () => {
  const dispatch = useDispatch();
  const httpError = useSelector(getAuthError);
  const isRequest = useSelector(getIsRequest);
  const messages = {
    axiosError: 'Email or password is invalid',
    accessMessage: 'Password is secure',
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // toggle password
  const togglePasswordVisibility = (value) => {
    switch (value) {
      case 'password':
        setPasswordVisible(!passwordVisible);
        break;

      case 'confirmPassword':
        setConfirmPasswordVisible(!confirmPasswordVisible);
        break;

      default:
        break;
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validate={() => {
        dispatch(authSlice.actions.resetHttpError());
      }}
      validationSchema={AuthFormSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={({ name, email, password }, { resetForm }) => {
        dispatch(register({ name, email, password }));
        resetForm();
      }}
    >
      {({ errors, setFieldError, values, setFieldValue }) => (
        <Form className={`${formStyles}`}>
          <AuthHeader header="Registration" />
          <div className="flex flex-col gap-9 w-full">
            {/* Name */}
            <AuthInputWrapper>
              <AuthLabel htmlFor="name" />
              <Field
                id="name"
                name="name"
                placeholder="Name"
                value={values.name}
                className={`${inputStyles} ${
                  errors['name'] ? 'border-red' : null
                }`}
                onClick={() => {
                  setFieldError('name', '');
                }}
              />

              {errors['name'] && values['name'] !== '' && (
                <Svg
                  id="icon-cross"
                  className="right-3 absolute cursor-pointer"
                  onClick={() => {
                    setFieldValue('name', '');
                    setFieldError('name', '');
                  }}
                  stroke="#F43F5E"
                />
              )}

              <ErrorMessage
                name="name"
                component="div"
                className={`${wrapperError}`}
              />
            </AuthInputWrapper>

            {/* Email */}
            <AuthInputWrapper>
              <AuthLabel htmlFor="email" />
              <Field
                id="email"
                name="email"
                placeholder="Email"
                value={values.email}
                className={`${inputStyles} ${
                  errors['email'] || httpError ? 'border-red' : null
                }`}
                onClick={() => {
                  setFieldError('email', '');
                }}
              />

              {errors['email'] && values['email'] !== '' && (
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
              {/* Axios Error */}
              {httpError === 409 ? (
                <div className={`${wrapperError}`}>{messages.axiosError}</div>
              ) : null}
            </AuthInputWrapper>

            {/* Password */}
            <AuthInputWrapper>
              <AuthLabel htmlFor="password" />
              <Field
                id="password"
                name="password"
                placeholder="Password"
                value={values.password}
                type={passwordVisible ? 'text' : 'password'}
                className={`${inputStyles} ${
                  errors['password'] ? 'border-red' : null
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

              {isRequest ? (
                <div className={`${passwordSuccess}`}>
                  {messages.accessMessage}
                </div>
              ) : null}
            </AuthInputWrapper>

            {/* Confirm Password */}
            <AuthInputWrapper>
              <AuthLabel htmlFor="confirmPassword" />
              <Field
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                value={values.confirmPassword}
                type={confirmPasswordVisible ? 'text' : 'password'}
                className={`${inputStyles} ${
                  errors['confirmPassword'] ? 'border-red' : null
                } ${isRequest ? 'border-[#00C3AD]' : null} `}
                onClick={() => {
                  setFieldError('confirmPassword', '');
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
                  onClick={() => togglePasswordVisibility('confirmPassword')}
                  id={`${
                    confirmPasswordVisible ? `icon-eye-open` : `icon-eye-closed`
                  }`}
                  fill="transparent"
                  stroke="#54ADFF"
                />
              </AuthSvgWrapper>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className={`${wrapperError}`}
              />

              {isRequest ? (
                <div className={`${passwordSuccess}`}>
                  {messages.accessMessage}
                </div>
              ) : null}
            </AuthInputWrapper>
          </div>

          <div className="w-full flex justify-center mt-[60px] mb-[20px] ">
            <AuthButton name="Registration" />
          </div>
          <AuthFooter pathName="Login" />
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
