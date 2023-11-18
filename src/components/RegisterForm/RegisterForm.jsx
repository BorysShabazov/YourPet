import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import sprite from './sprite.svg';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/auth-operations';
import RegisterSchema from './RegisterSchema';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validateOnChange: false,
    validateOnBlur: false,

    validationSchema: RegisterSchema,

    onSubmit: ({ name, email, password }, { resetForm }) => {
      dispatch(register({ name, email, password }));
      resetForm();
    },
  });

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
    <form
      noValidate
      className="w-[280px] pt-10 pb-10 pl-3 pr-3 bg-white rounded-[20px] shadow"
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-center text-neutral-900 text-2xl font-medium mb-5">
        Registration
      </h1>

      <div className="mb-3">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          className="w-64 h-12 px-4 py-3 rounded-[40px] border border-blue-400 outline-none"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && (
          <div className="pl-4 mt-1 text-rose-500 text-xs font-normal">
            {formik.errors.name}
          </div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-64 h-12 px-4 py-3 rounded-[40px] border border-blue-400 outline-none"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        {formik.errors.email && (
          <div className="pl-4 mt-1 text-rose-500 text-xs font-normal">
            {formik.errors.email}
          </div>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="sr-only">
          Password
        </label>

        <div className="flex relative items-center justify-between">
          <input
            id="password"
            name="password"
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            className="w-64 h-12 px-4 py-3 rounded-[40px] border border-blue-400 outline-none"
            value={formik.values.password}
            onChange={formik.handleChange}
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
          <div className="pl-4 mt-1 text-rose-500 text-xs font-normal">
            {formik.errors.password}
          </div>
        )}
      </div>

      <div className="mb-10">
        <label htmlFor="confirmPassword" className="sr-only">
          Repeat Password
        </label>

        <div className="flex relative items-center justify-between">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={confirmPasswordVisible ? 'text' : 'password'}
            placeholder="Confirm password"
            className="w-64 h-12 px-4 py-3 rounded-[40px] border border-blue-400 outline-none"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
          />
          <svg
            className="w-6 h-6 right-3 absolute"
            onClick={() => togglePasswordVisibility('confirmPassword')}
          >
            <use
              xlinkHref={
                confirmPasswordVisible
                  ? `${sprite}#eye-open`
                  : `${sprite}#eye-closed`
              }
            />
          </svg>
        </div>

        {formik.errors.confirmPassword && (
          <div className="pl-4 mt-1 text-rose-500 text-xs font-normal">
            {formik.errors.confirmPassword}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-64 h-12 mb-2 bg-blue rounded-[40px] justify-center items-center gap-2.5 inline-flex"
      >
        <p className="text-white text-xl tracking-wide font-semibold">Login</p>
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

export default RegisterForm;
