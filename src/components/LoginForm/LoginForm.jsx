import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { login } from '../../Redux/auth/auth-operations';
import { getAuthError } from '../../Redux/auth/auth-selectors';
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
} from './auth-styles';
import { AuthInputWrapper } from '../AuthComponents/AuthInputWrapper';
import { AuthSvgWrapper } from '../AuthComponents/AuthSvgWrapper';
const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  const httpError = useSelector(getAuthError);
  const messages = {
    axiosError: 'Email or password is invalid',
    accessMessage: 'Password is secure',
  };

  useEffect(() => {
    dispatch(authSlice.actions.resetHttpError());
  }, [dispatch]);

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
      validationSchema={LoginFormSchema}
      onSubmit={({ email, password }) => {
        dispatch(login({ email, password }));
      }}
    >
      {({
        errors,
        touched,
        setFieldError,
        values,
        setFieldValue,
        handleChange,
      }) => (
        <Form className={`${formStyles}`}>
          <AuthHeader header="Login" />
          <div className="flex flex-col gap-9 w-full">
            <AuthInputWrapper>
              <AuthLabel htmlFor="email" />
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={values.email}
                className={`${inputStyles} ${
                  errors.email && touched.email ? 'border-red' : ''
                }`}
              />

              {errors.email && touched.email && values.email !== '' && (
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
                value={values.password}
                type={passwordVisible ? 'text' : 'password'}
                onChange={(e) => {
                  handleChange(e);
                  if (httpError) dispatch(authSlice.actions.resetHttpError());
                }}
                className={`${inputStyles} ${
                  (errors.password && touched.password) || httpError
                    ? 'border-red'
                    : ''
                } ${
                  !errors.password && values.password && !httpError
                    ? '!border-[#00C3AD]'
                    : ''
                } `}
              />
              <AuthSvgWrapper>
                {!errors.password && values.password && !httpError ? (
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
              {httpError ? (
                <div className={`${wrapperError}`}>{messages.axiosError}</div>
              ) : null}

              {!errors.password && values.password && !httpError ? (
                <div className={`${passwordSuccess}`}>
                  {messages.accessMessage}
                </div>
              ) : null}
            </AuthInputWrapper>
          </div>

          <div className="w-full flex justify-center mt-[60px] mb-[20px] ">
            <AuthButton name="Login" />
          </div>
          <AuthFooter pathName="register" />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
