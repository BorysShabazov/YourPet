import * as yup from 'yup';

const nameRules = /^[A-Za-z]+$/;
const phoneRegExp = /^\+[0-9]{12}$/;

export const userSchema = yup.object().shape({
  city: yup.string('Type must be a string').max(60),

  name: yup
    .string()
    .min(2, 'Too Short')
    .max(16, 'Too Long, max 16')
    .matches(nameRules, 'Name must contain only characters')
    .required('Name is Required'),

  email: yup
    .string()
    .email('Enter a valid Email')
    .required('Email is Required'),

  phone: yup
    .string('Type must be a string')
    .matches(phoneRegExp, 'Format: +38123456789'),
});
