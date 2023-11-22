import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/auth/auth-operations';
import { useState } from 'react';
import { getAuthError } from '../../Redux/auth/auth-selectors';
import LoginFormSchema from '../../schemas/LoginFormSchema';
import Svg from '../Svg/Svg';
import AuthHeader from '../AuthComponents/AuthHeader';
import AuthButton from '../AuthComponents/AuthButton';
import AuthFooter from '../AuthComponents/AuthFooter';
import AuthLabel from '../AuthComponents/AuthLabel';
import AuthWrapper from '../AuthComponents/AuthWrapper';

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  let httpError = useSelector(getAuthError);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: false,

    validationSchema: LoginFormSchema,

    onSubmit: ({ email, password }, { resetForm }) => {
      httpError = null;
      dispatch(login({ email, password }));
      resetForm();
    },
  });

  const errors = formik.errors;
  const values = formik.values;

  // clear field after press cross
  const clearField = (name) => {
    values[name] = '';
    formik.setFieldValue(name, '');
    formik.setFieldError(name, '');
  };

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
    <AuthWrapper handleSubmit={formik.handleSubmit}>
      <AuthHeader header="Login" />

      <div className="flex flex-col gap-9 w-full">
        {/* email */}
        <div className="relative">
          <AuthLabel htmlFor="email" />

          <div className="flex relative items-center justify-between">
            <input
              id="email"
              name="email"
              type="email"
              className={`w-full h-12 px-4 py-3 rounded-[40px] border border-blue outline-none ${
                errors['email'] && 'border-rose-400'
              }`}
              placeholder="Email"
              value={values['email']}
              onChange={formik.handleChange}
              onFocus={() => {
                formik.setFieldError('email', '');
              }}
            />
            {errors['email'] && values['email'] !== '' && (
              <Svg
                id="icon-cross"
                className="right-3 absolute cursor-pointer"
                onClick={() => clearField('email')}
                stroke="#F43F5E"
              />
            )}
          </div>

          {errors['email'] && (
            <div className="pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal">
              {errors['email']}
            </div>
          )}
        </div>

        {/* password */}
        <div className="relative">
          <AuthLabel htmlFor="password" />

          <div className="flex relative items-center justify-between">
            <input
              id="password"
              name="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              className={`w-full h-12 px-4 py-3 rounded-[40px] border border-blue outline-none ${
                errors['password'] && 'border-rose-400'
              }`}
              value={values['password']}
              onChange={formik.handleChange}
              onFocus={() => {
                formik.setFieldError('password', '');
              }}
            />

            <Svg
              className="absolute right-3 cursor-pointer"
              onClick={() => togglePasswordVisibility('password')}
              id={`${passwordVisible ? `icon-eye-open` : `icon-eye-closed`}`}
              fill="transparent"
              stroke="#54ADFF"
            />
          </div>

          {errors['password'] && (
            <div className="pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal">
              {errors['password']}
            </div>
          )}

          {httpError === 401 && (
            <div className="pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal">
              Email or password is invalid
            </div>
          )}
        </div>
      </div>

      <div className="w-full flex justify-center mt-[60px] mb-[20px] ">
        <AuthButton name="Login" />
      </div>

      <AuthFooter pathName="Register" />
    </AuthWrapper>
  );
};

export default LoginForm;
