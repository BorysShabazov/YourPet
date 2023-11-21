import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../Redux/auth/auth-operations';
import { getAuthError } from '../../Redux/auth/auth-selectors';
import AuthFormSchema from '../../schemas/AuthFormSchema';
import Svg from '../Svg/Svg';

const AuthForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(getAuthError);

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
      dispatch(register({ name, email, password }));
      resetForm();
    },
  });

  const formikErrors = formik.errors;
  const formikValues = formik.values;

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
    <form
      noValidate
      autoComplete="off"
      className="w-[280px] pt-10 pb-10 pl-3 pr-3 bg-white rounded-[20px] shadow"
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-center text-neutral-900 text-2xl font-medium mb-5">
        Registration
      </h1>

      {/* name */}
      <div className="h-[70px]">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <div className="flex relative items-center justify-between">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className={`w-64 h-12 px-4 py-3 rounded-[40px] border border-blue-400 outline-none ${
              formikErrors['name'] && 'border-rose-400'
            }`}
            value={formikValues['name']}
            onChange={formik.handleChange}
            onFocus={() => {
              formik.setFieldError('name', '');
            }}
          />

          {formik.errors.name && formik.values.name !== '' && (
            <Svg
              id="cross"
              className="right-3 absolute cursor-pointer"
              onClick={() => clearField('name')}
            />
          )}
        </div>

        {formik.errors.name && (
          <div className="pl-4 text-rose-500 text-xs font-normal">
            {formik.errors.name}
          </div>
        )}
      </div>

      {/* email */}
      <div className="h-[70px]">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <div className="flex relative items-center justify-between">
          <input
            id="email"
            name="email"
            type="email"
            className={`w-64 h-12 px-4 py-3 rounded-[40px] border border-blue-400 outline-none ${
              formikErrors['email'] && 'border-rose-400'
            }`}
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onFocus={() => {
              formik.setFieldError('email', '');
            }}
          />
          {formik.errors.email && formik.values.email !== '' && (
            <Svg
              id="cross"
              className="right-3 absolute cursor-pointer"
              onClick={() => clearField('email')}
            />
          )}
        </div>

        {formik.errors.email && (
          <div className="pl-4 text-rose-500 text-xs font-normal">
            {formik.errors.email}
          </div>
        )}

        {error === 409 && (
          <div className="pl-4 text-rose-500 text-xs font-normal">
            E-mail address already in use
          </div>
        )}
      </div>

      {/* password */}
      <div className="h-[70px]">
        <label htmlFor="password" className="sr-only">
          Password
        </label>

        <div className="flex relative items-center justify-between">
          <input
            id="password"
            name="password"
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            className={`w-64 h-12 px-4 py-3 rounded-[40px] border border-blue-400 outline-none ${
              formikErrors['password'] && 'border-rose-400'
            }`}
            value={formik.values.password}
            onChange={formik.handleChange}
            onFocus={() => {
              formik.setFieldError('password', '');
            }}
          />
          <Svg
            className="absolute right-3 cursor-pointer"
            onClick={() => togglePasswordVisibility('password')}
            id={`${passwordVisible ? `eye-open` : `eye-closed`}`}
          />
        </div>

        {formik.errors.password && (
          <div className="pl-4 text-rose-500 text-xs font-normal">
            {formik.errors.password}
          </div>
        )}
      </div>

      {/* confirmPassword */}
      <div className="h-[98px]">
        <label htmlFor="confirmPassword" className="sr-only">
          Repeat Password
        </label>

        <div className="flex relative items-center justify-between">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={confirmPasswordVisible ? 'text' : 'password'}
            placeholder="Confirm password"
            className={`w-64 h-12 px-4 py-3 rounded-[40px] border border-blue-400 outline-none ${
              formikErrors['confirmPassword'] && 'border-rose-400'
            }`}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onFocus={() => {
              formik.setFieldError('confirmPassword', '');
            }}
          />
          <Svg
            className="absolute right-3 cursor-pointer"
            onClick={() => togglePasswordVisibility('confirmPassword')}
            id={`${confirmPasswordVisible ? `eye-open` : `eye-closed`}`}
          />
        </div>

        {formikErrors['confirmPassword'] && (
          <div className="pl-4 text-rose-500 text-xs font-normal">
            {formikErrors['confirmPassword']}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-64 h-12 mb-2 bg-blue rounded-[40px] justify-center items-center gap-2.5 inline-flex"
      >
        <p className="text-white text-xl tracking-wide font-semibold">
          Registration
        </p>
      </button>

      <div className="text-center">
        <span className="text-zinc-500 text-xs font-normal tracking-wide">
          Already have an account?&nbsp;
        </span>
        <NavLink
          className="text-blue-400 text-xs font-normal underline tracking-wide"
          to={'/login'}
        >
          Login
        </NavLink>
      </div>
    </form>
  );
};

export default AuthForm;
