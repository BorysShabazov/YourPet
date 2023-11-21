import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../Redux/auth/auth-operations';
import { getAuthError } from '../../Redux/auth/auth-selectors';
import AuthFormSchema from '../../schemas/AuthFormSchema';
import Svg from '../Svg/Svg';
import AuthHeader from '../AuthComponents/AuthHeader';
import AuthButton from '../AuthComponents/AuthButton';
import AuthFooter from '../AuthComponents/AuthFooter';
import AuthLabel from '../AuthComponents/AuthLabel';
import AuthWrapper from '../AuthComponents/AuthWrapper';

const AuthForm = () => {
  const dispatch = useDispatch();
  let httpError = useSelector(getAuthError);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validateOnChange: false,
    validateOnBlur: false,

    validationSchema: AuthFormSchema,

    onSubmit: ({ name, email, password }, { resetForm }) => {
      httpError = null;
      dispatch(register({ name, email, password }));
      resetForm();
    },
  });

  const errors = formik.errors;
  const values = formik.values;

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

  // clear field after press cross
  const clearField = (name) => {
    formik.values[name] = '';
    formik.setFieldValue(name, '');
    formik.setFieldError(name, '');
  };

  return (
    <AuthWrapper handleSubmit={formik.handleSubmit}>
      <AuthHeader header="Registration" />

      <div className="flex flex-col gap-9 w-full">
        {/* name */}
        <div className="relative">
          <AuthLabel htmlFor="name" />

          <div className="flex relative items-center justify-between">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              className={`w-full h-12 px-4 py-3 rounded-[40px] border border-blue outline-none ${
                errors['name'] && 'border-rose-400'
              }`}
              value={values['name']}
              onChange={formik.handleChange}
              onFocus={() => {
                formik.setFieldError('name', '');
              }}
            />

            {errors['name'] && values['name'] !== '' && (
              <Svg
                id="icon-cross"
                className="right-3 absolute cursor-pointer"
                onClick={() => clearField('name')}
                stroke="#F43F5E"
              />
            )}
          </div>

          {errors['name'] && (
            <p className="pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal">
              {errors['name']}
            </p>
          )}
        </div>

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
            <p className="pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal">
              {errors['email']}
            </p>
          )}

          {httpError === 409 && (
            <p className="pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal">
              E-mail address already in use
            </p>
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
              onClick={() =>
                togglePasswordVisibility('passwordVisiblepassword')
              }
              id={`${passwordVisible ? `icon-eye-open` : `icon-eye-closed`}`}
              fill="transparent"
              stroke="#54ADFF"
            />
          </div>

          {errors['password'] && (
            <p className="pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal">
              {errors['password']}
            </p>
          )}
        </div>

        {/* confirmPassword */}
        <div className="relative">
          <AuthLabel htmlFor="confirmPassword" />

          <div className="flex relative items-center justify-between">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={confirmPasswordVisible ? 'text' : 'password'}
              placeholder="Confirm password"
              className={`w-full h-12 px-4 py-3 rounded-[40px] border border-blue outline-none ${
                errors['confirmPassword'] && 'border-rose-400'
              }`}
              value={values['confirmPassword']}
              onChange={formik.handleChange}
              onFocus={() => {
                formik.setFieldError('confirmPassword', '');
              }}
            />
            <Svg
              className="absolute right-3 cursor-pointer"
              onClick={() => togglePasswordVisibility('confirmPassword')}
              id={`${
                confirmPasswordVisible ? `icon-eye-open` : `icon-eye-closed`
              }`}
              fill="transparent"
              stroke="#54ADFF"
            />
          </div>

          {errors['confirmPassword'] && (
            <p className="pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal">
              {errors['confirmPassword']}
            </p>
          )}
        </div>
      </div>

      <div className="w-full flex justify-center mt-[40px] mb-[20px] ">
        <AuthButton name="Registration" />
      </div>

      <AuthFooter pathName="Login" />
    </AuthWrapper>
  );
};

export default AuthForm;
