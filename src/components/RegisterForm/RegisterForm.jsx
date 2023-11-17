import { useState } from 'react';
import { useFormik } from 'formik';
import {
  RegisterFormWrapper,
  RegisterLabel,
  RegisterInput,
  RegisterHeader,
  RegisterDivWrapper,
  RegisterEye,
} from './RegisterForm.styled';
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
    <RegisterFormWrapper onSubmit={formik.handleSubmit}>
      <RegisterHeader>Registration</RegisterHeader>
      <RegisterDivWrapper>
        <RegisterLabel htmlFor="name" className="visually-hidden">
          Name
        </RegisterLabel>
        <RegisterInput
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </RegisterDivWrapper>

      <RegisterDivWrapper>
        <RegisterLabel htmlFor="email" className="visually-hidden">
          Email
        </RegisterLabel>
        <RegisterInput
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </RegisterDivWrapper>

      <RegisterDivWrapper>
        <RegisterLabel htmlFor="password" className="visually-hidden">
          Password
        </RegisterLabel>

        <RegisterInput
          id="password"
          name="password"
          type={passwordVisible ? 'text' : 'password'}
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <RegisterEye onClick={() => togglePasswordVisibility('password')}>
          <use
            xlinkHref={
              passwordVisible ? `${sprite}#eye-open` : `${sprite}#eye-closed`
            }
          />
        </RegisterEye>
      </RegisterDivWrapper>

      <RegisterDivWrapper>
        <RegisterLabel htmlFor="rePassword" className="visually-hidden">
          Repeat Password
        </RegisterLabel>
        <RegisterInput
          id="rePassword"
          name="rePassword"
          type={confirmPasswordVisible ? 'text' : 'password'}
          placeholder="Confirm password"
          value={formik.values.rePassword}
          onChange={formik.handleChange}
        />
        <RegisterEye
          onClick={() => togglePasswordVisibility('confirmPassword')}
        >
          <use
            xlinkHref={
              confirmPasswordVisible
                ? `${sprite}#eye-open`
                : `${sprite}#eye-closed`
            }
          />
        </RegisterEye>
      </RegisterDivWrapper>
    </RegisterFormWrapper>
  );
};
export default RegisterForm;
