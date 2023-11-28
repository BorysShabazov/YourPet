import * as Yup from 'yup';

const nameRules = /^[A-Za-z]+$/;
const emailRules = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const AuthFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short')
    .max(16, 'Too Long, max 16')
    .matches(nameRules, 'Name must contain only characters')
    .required('Name is Required'),

  email: Yup.string()
    .matches(emailRules, {
      message: 'Enter a valid Email',
    })
    .required('Email is Required'),

  password: Yup.string()
    .matches(passwordRules, {
      message: '6+ chars, 1 UPPERCASE, 1 lowercase, 1 digit',
    })
    .required('Password is Required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .matches(passwordRules, {
      message: '6+ chars, 1 UPPERCASE, 1 lowercase, 1 digit',
    })
    .required('Confirm Password is Required'),
});

export default AuthFormSchema;
