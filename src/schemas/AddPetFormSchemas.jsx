import * as yup from 'yup';
const datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/;

const MAX_MB_FILESIZE = 3;

export const firstValidationSchema = yup.object({
  category: yup
    .string()
    .oneOf(['own', 'sell', 'lost', 'found', 'good-hands'], 'Invalid category')
    .required('You have to choose the category'),
});

export const secondValidationSchema = yup.object({
  title: yup
    .string('Title must be a sting')
    .max(20)
    .when('category', {
      is: 'own', // alternatively: (val) => val == true
      then: (schema) => schema.notRequired(),
      otherwise: (schema) => schema.required('You have to write the title'),
    }),

  name: yup
    .string('Name must be a sting')
    .min(2)
    .max(16)
    .when('category', {
      is: 'found',
      then: (schema) => schema.notRequired(),
      otherwise: (schema) =>
        schema.required("You have to write the pet's name"),
    }),

  birth: yup
    .string('Birthdate must be a sting')
    .matches(datePattern, { message: 'Date must have DD-MM-YYYY format' })
    .when('category', {
      is: 'found',
      then: (schema) => schema.notRequired(),
      otherwise: (schema) =>
        schema.required("You have to write the pet's birthdate"),
    }),

  type: yup
    .string('Type must be a string')
    .min(2)
    .max(16)
    .required("You have to write the pet's type"),
});

export const lastValidationSchema = yup.object({
  sex: yup
    .string()
    .oneOf(['male', 'female'], 'Invalid sex')
    .required('You have to choose the sex'),

  petImage: yup
    .mixed()
    .required("You need to add the pet's photo")
    .test(
      'fileSize',
      'File too large',
      (value) => value && value.size <= MAX_MB_FILESIZE * 1048576,
    ),
  price: yup
    .number('Price must be a number')
    .min(1, "Price can't be lower than 0 or equal to it")
    .when('category', {
      is: 'sell',
      then: (schema) => schema.required('You have to write the price'),
      otherwise: (schema) => schema.notRequired(),
    }),

  location: yup.string().when('category', {
    is: 'own',
    then: (schema) => schema.notRequired(),
    otherwise: (schema) => schema.required('You have to write location'),
  }),

  comments: yup.string().max(120),
});
