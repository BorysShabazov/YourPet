import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid Email')
    .required('Email is Required'),

  password: Yup.string()
    .matches(passwordRules, {
      message: '6+ chars, 1 UPPERCASE, 1 lowercase, 1 digit',
    })
    .required('Password is Required'),
});

export default LoginFormSchema;
