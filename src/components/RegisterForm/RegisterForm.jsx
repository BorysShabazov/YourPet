import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import sprite from './sprite.svg';

const RegisterForm = () => {
  // formik hook
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
    },

    onSubmit: (values) => {
      // send data to backend
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
      className="w-[280px] h-[479px] pt-10 pb-10 pl-3 pr-3 bg-white rounded-[20px] shadow"
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-center text-neutral-900 text-2xl font-medium mb-5">
        Registration
      </h1>

      <div className="mb-3 w-64 h-12 px-4 py-3 rounded-[40px] border border-blue-400 justify-between items-center">
        <label htmlFor="name" className="visually-hidden">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          className=""
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </div>

      <div className="mb-3 w-64 h-12 px-4 py-3 rounded-[40px] border border-blue-400 justify-between items-center">
        <label htmlFor="email" className="visually-hidden">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>

      <div className="flex mb-3 w-64 h-12 px-4 py-3 rounded-[40px] border border-blue-400 justify-between items-center relative">
        <label htmlFor="password" className="visually-hidden">
          Password
        </label>

        <input
          id="password"
          name="password"
          type={passwordVisible ? 'text' : 'password'}
          placeholder="Password"
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

      <div className="flex mb-10 w-64 h-12 px-4 py-3 rounded-[40px] border border-blue-400 justify-between items-center relative">
        <label htmlFor="rePassword" className="visually-hidden">
          Repeat Password
        </label>
        <input
          id="rePassword"
          name="rePassword"
          type={confirmPasswordVisible ? 'text' : 'password'}
          placeholder="Confirm password"
          value={formik.values.rePassword}
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

      <button className="w-64 h-12 mb-2 px-7 py-2.5 bg-blue-400 rounded-[40px] justify-center items-center gap-2.5 inline-flex">
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
