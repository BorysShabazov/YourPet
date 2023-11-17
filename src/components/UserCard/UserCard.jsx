// import { CloseIcon } from "../CloseIcon/CloseIcon";
// import { EditIcon } from "../EditIcon/EditIcon";
// import { PhotoIcon } from "../PhotoIcon/PhotoIcon";
// import { AvatarUpload, UserCardAvatar, UserInputWrapper, UserInformationContainer, UserInformationWrapper, UserFormWrapper, EditProfile } from "./UserCard.styled";
// import { Formik, Form, Field, ErrorMessage } from 'formik';

// const UserCard = () => {

//   const validate = values => {
//     const errors = {};

//     if (!values.user.name) {
//       errors.user = { ...errors.user, name: 'Name is required' };
//       console.log(errors.user.name);
//     }

//     if (!values.user.email) {
//       errors.user = { ...errors.user, email: 'Email is required' };
//       console.log(errors.user.email);

//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user.email)) {
//       errors.user = { ...errors.user, email: 'Invalid email address' };
//       console.log(errors.user.email);
//     }

//     if (!values.user.birthday) {
//       errors.user = { ...errors.user, birthday: 'Birthday is required' };
//     }

//     if (!values.user.phone) {
//       errors.user = { ...errors.user, phone: 'Phone number is required' };
//     }

//     if (!values.user.city) {
//       errors.user = { ...errors.user, city: 'City is required' };
//     }

//     return errors;
//   };

// return (
//   <div>
//           <h2>My information:</h2>
//           <UserInformationContainer>
//             <UserInformationWrapper>
//             <EditProfile>
//               <EditIcon/>
//               {/* <CloseIcon/> */}
//             </EditProfile>
//             <UserCardAvatar>

//             </UserCardAvatar>
//             <Formik
//             initialValues={{
//                 user: {
//                 avatar: null,
//                 name: '',
//                 email: '',
//                 birthday: '',
//                 phone: '',
//                 city: '',
//          },
//        }}
//        validate={validate}
//        onSubmit={values => {
//          console.log(values);
//        }}
//      >
//        <Form>
//         <AvatarUpload>
//           <label htmlFor="user.avatar">
//           <PhotoIcon/>
//           Edit photo
//           </label>
//             <input
//               type="file"
//               id="user.avatar"
//               name="user.avatar"
//               accept="image/*"
//               onChange={(event) => {
//                 const file = event.currentTarget.files[0];
//                 setFieldValue("user.avatar", file);
//               }}
//             />
//           </AvatarUpload>
//         <UserFormWrapper>
//         <UserInputWrapper>
//             <label htmlFor="user.name">Name:</label>
//             <Field type="text" id="user.name" name="user.name" />
//           </UserInputWrapper>
//           <UserInputWrapper>
//             <label htmlFor="user.email">Email:</label>
//             <Field type="text" id="user.email" name="user.email" />
//           </UserInputWrapper>

//           <UserInputWrapper>
//             <label htmlFor="user.birthday">Birthday:</label>
//             <Field type="date" id="user.birthday" name="user.birthday" />
//           </UserInputWrapper>

//           <UserInputWrapper>
//             <label htmlFor="user.phone">Phone:</label>
//             <Field type="tel" id="user.phone" name="user.phone" />
//           </UserInputWrapper>

//           <UserInputWrapper>
//             <label htmlFor="user.city">City:</label>
//             <Field type="text" id="user.city" name="user.city" />
//          </UserInputWrapper>
//         </UserFormWrapper>
//          <button type="submit">Submit</button>
//        </Form>
//             </Formik>

//             </UserInformationWrapper>
//           </UserInformationContainer>
//     </div>
// )
// };

// export default UserCard;
