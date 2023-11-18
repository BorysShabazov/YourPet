import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short')
    .max(16, 'Too Long, max 16')
    .required('Name is Required'),

  email: Yup.string()
    .email('Enter a valid Email')
    .required('Email is Required'),

  password: Yup.string()
    .matches(passwordRules, {
      message: 'Min 8 character, including a number and a lowercase letter.',
    })
    .required('Password is Required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export default RegisterSchema;
