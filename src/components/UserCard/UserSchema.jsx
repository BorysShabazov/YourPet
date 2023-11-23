import * as yup from 'yup';

const datePattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
const nameRules = /^[A-Za-z]+$/;
export const userSchema = yup.object().shape({
  // avatar,
  city: yup.string('Type must be a string').max(60),
  
  name: yup.string()
    .min(2, 'Too Short')
    .max(16, 'Too Long, max 16')
    .matches(nameRules, 'Name must contain only characters')
    .required('Name is Required'),

  email: yup.string()
    .email('Enter a valid Email')
    .required('Email is Required'),


    // birthday: yup
    // .string('Birthdate must be a sting')
    // .matches(datePattern, { message: 'Date must have DD-MM-YYYY format' }),

    phone: yup.number(),

});
