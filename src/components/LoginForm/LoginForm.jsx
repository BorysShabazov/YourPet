import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import LoginFormSchema from './LoginFormSchema';
import { login } from '../../Redux/auth/auth-operations';
import { useState } from 'react';
import { getAuthError } from '../../Redux/auth/auth-selectors';
import sprite from './sprite.svg';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useDispatch();
  let error = useSelector(getAuthError);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validateOnBlur: false,

    validationSchema: LoginFormSchema,

    onSubmit: ({ email, password }, { resetForm }) => {
      error = null;
      dispatch(login({ email, password }));
      resetForm();
    },
  });

  const formikErrors = formik.errors;
  const formikValues = formik.values;

  // clear field after press cross
  const clearField = (name) => {
    formik.values[name] = '';
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
    <form
      noValidate
      autoComplete="off"
      className="w-[280px] pt-10 pb-10 pl-3 pr-3 bg-white rounded-[20px] shadow"
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-center text-neutral-900 text-2xl font-medium mb-5">
        Login
      </h1>

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
          {formikErrors['email'] && formikValues['email'] !== '' && (
            <svg
              className="w-6 h-6 right-3 absolute"
              onClick={() => clearField('email')}
            >
              <use xlinkHref={`${sprite}#cross`} />
            </svg>
          )}
        </div>

        {formik.errors.email && (
          <div className="pl-4 text-rose-500 text-xs font-normal">
            {formik.errors.email}
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
          <svg
            className="w-6 h-6 right-3 absolute"
            onClick={() => togglePasswordVisibility('password')}
          >
            <use
              xlinkHref={
                passwordVisible ? `${sprite}#eye-open` : `${sprite}#eye-closed`
              }
            />
          </svg>
        </div>

        {formik.errors.password && (
          <div className="pl-4 text-rose-500 text-xs font-normal">
            {formik.errors.password}
          </div>
        )}

        {error === 401 && (
          <div className="pl-4 text-rose-500 text-xs font-normal">
            Email or password is invalid
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-64 h-12 mb-2 bg-blue rounded-[40px] justify-center items-center gap-2.5 inline-flex"
      >
        <p className="text-white text-xl tracking-wide font-semibold">Login</p>
      </button>

      <div className="text-center ">
        <span className="text-zinc-500 text-xs font-normal tracking-wide">
          Don`t have an account?&nbsp;
        </span>
        <NavLink
          className="text-blue-400 text-xs font-normal underline tracking-wide"
          to={'/register'}
        >
          Register
        </NavLink>
      </div>
    </form>
  );
};

export default LoginForm;
