import { CloseIcon } from '../CloseIcon/CloseIcon';
import { useEffect, useState } from 'react';
import { EditIcon } from '../EditIcon/EditIcon';
import { PhotoIcon } from '../PhotoIcon/PhotoIcon';
import { Formik, Form, Field, useFormik } from 'formik';
import Svg from '../Svg/Svg';

const labelStyle = "text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] "
const inputStyle = "text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide w-[190px] h-6 px-3 py-1 rounded-[20px] border border-blue-400 justify-start items-center gap-[191px] inline-flex md:w-[255px]  xl:w-[255px]"

export const UserForm = ({user, handleUser}) => {

  const [userImagePath, setUserImagePath] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [previewAvatar, setPreviewAvatar] = useState(null);
  const [changeAvatar, setChangeAvatar] = useState(false)
  const [confirmChangeAvatar, setConfirmChangeAvatar] = useState(false)

  useEffect(() => {
    if(!isEdit) {
      setPreviewAvatar('')
    }
  }, [isEdit])

  const formik = useFormik({
    initialValues: {
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      birthday: user.birthday,
      phone: user.phone,
      city: user.city,
    },
    validateOnChange: false,
    validateOnBlur: false,
    // validationSchema: AuthFormSchema,

      city: user.city,
      onSubmit: ({ avatar, name, email, birthday, phone, city}, { resetForm }) => {
      const updateUser = {
        avatar, name, email, birthday, phone, city
      }
      console.log(updateUser);
      setIsEdit(false)
      resetForm();
    },
  });

  const formikErrors = formik.errors;
  const formikValues = formik.values;

  const validate = values => {
    const errors = {};

    if (!values.user.name) {
      errors.user = { ...errors.user, name: 'Name is required' };
      console.log(errors.user.name);
    }

    if (!values.user.email) {
      errors.user = { ...errors.user, email: 'Email is required' };
      console.log(errors.user.email);
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user.email)
    ) {
      errors.user = { ...errors.user, email: 'Invalid email address' };
      console.log(errors.user.email);
    }

    if (!values.user.birthday) {
      errors.user = { ...errors.user, birthday: 'Birthday is required' };
    }

    if (!values.user.phone) {
      errors.user = { ...errors.user, phone: 'Phone number is required' };
    }

    if (!values.user.city) {
      errors.user = { ...errors.user, city: 'City is required' };
    }

    return errors;
  };

  function previewFile(file) {
    var reader = new FileReader();

    reader.onloadend = function () {
      setPreviewAvatar(reader.result);
    };
  
    if (file) {
      reader.readAsDataURL(file);
      setChangeAvatar(true)
    } else {
      return
    }
  }

  const resetFields = () => {
    setIsEdit(false);
    setChangeAvatar(false);
    setConfirmChangeAvatar(false)
    formik.setFieldValue("name", user.name);
    formik.setFieldValue('email', user.email);
    formik.setFieldValue('birthday', user.birthday);
    formik.setFieldValue('phone', user.phone);
    formik.setFieldValue('city', user.city);
  };

  return (
    <form
    noValidate
    autoComplete="off"
    className="flex flex-col flex-wrap-reverse"
    onSubmit={formik.handleSubmit}
  >
        <div className="absolute top-[14px] right-[14px]">
          {!isEdit ? (
            <div onClick={() => setIsEdit(true)}>
              <EditIcon />
            </div>
          ) : (
            <div onClick={resetFields}>
              <CloseIcon />
            </div>
          )}
        </div>
        
        <div className="mdOnly:flex flex-row-reverse gap-[71px]">
          
          {/* Avatar */}
          <div className="flex justify-center">
            <label
              htmlFor="avatar"
              className="flex justify-center flex-col gap-[5px]"
            >
              <div className="flex justify-center mb-[14px]">
                <img
                  className="w-[182px] h-[182px] rounded-[40px] object-cover"
                  src={previewAvatar ? previewAvatar : user.avatar}
                  alt="User Avatar"
                />
              </div>
              {!changeAvatar ? <div
                className={
                  isEdit
                    ? 'flex flex-row justify-center gap-[5px] mb-[21px]'
                    : 'flex flex-row justify-center gap-[5px] mb-[21px] opacity-0'
                }
              >
                <PhotoIcon />
                Edit photo
              </div> :
              <div className="flex justify-center mb-[14px] gap-2">
                <div onClick={()=>{
                  setChangeAvatar(false)
                  setConfirmChangeAvatar(true)
                }}>
                <Svg id={"icon-check"} size={24} stroke={"#54ADFF"} fill={"transparent"}/>
                </div>
                Confirm
                <div onClick={()=>{
                  setChangeAvatar(false)
                  setPreviewAvatar(null)
                }}>
                <Svg id={"icon-trash"} size={24} stroke={"#54ADFF"} fill={"transparent"}/>
                </div>
                </div>}
            </label>

            <div>
              <input
                className="hidden"
                type={isEdit ? 'file' : ''}
                id="avatar"
                name="avatar"
                accept="image/*"
                onChange={e => {
                  const file = e.target.files[0];
                  const localPath = URL.createObjectURL(file);
                  formik.setFieldValue('user.avatar', file);(file);
                  setUserImagePath(localPath);
                  previewFile(file)
                }}
              />
            </div>
          </div>

          {/* All text-fields */}
          <div className="flex flex-col gap-[20px]">

            {/* Name */}
            <div className="flex justify-between">
              <label
                className={labelStyle}
                htmlFor="name"
              >
                Name:
              </label>
              <input
                className={inputStyle}
                type="text"
                id="name"
                name="name"
                value={formikValues['name']}
                onChange={formik.handleChange}
                readOnly={!isEdit}
              />
            </div>
            
            {/* Email */}
            <div className="flex justify-between w-full">
              <label
                className={labelStyle}
                htmlFor="email"
              >
                Email:
              </label>
              <input
                className={inputStyle}
                type="text"
                id="email"
                name="email"
                value={formikValues['email']}
                onChange={formik.handleChange}
                readOnly={!isEdit}
              />
            </div>

            {/* Birthday */}
            <div className="flex justify-between w-full">
              <label
                className={labelStyle}
                htmlFor="birthday"
              >
                Birthday:
              </label>
             <div className={inputStyle}>
             <input
                className='w-full'
                type="date"
                id="birthday"
                name="birthday"
                value={formikValues['birthday']}
                onChange={formik.handleChange}
                readOnly={!isEdit}
              />
             </div>
            </div>

            {/* Phone */}
            <div className="flex justify-between w-full">
              <label
                className={labelStyle}
                htmlFor="phone"
              >
                Phone:
              </label>
              <input
                className={inputStyle}
                type="tel"
                id="phone"
                name="phone"
                value={formikValues['phone']}
                onChange={formik.handleChange}
                readOnly={!isEdit}
              />
            </div>

            {/* City */}
            <div className="flex justify-between">
              <label
                className={labelStyle}
                htmlFor="city"
              >
                City:
              </label>
              <input
                className={inputStyle}
                type="text"
                id="city"
                name="city"
                value={formikValues['city']}
                onChange={formik.handleChange}
                readOnly={!isEdit}
              />
            </div>
            
            {/* Buttons */}
            {isEdit ? (
              <div className="w-full h-6 flex justify-end">
                <button
                  className="flex justify-center w-[248px] text-stone-50 text-sm font-bold font-['Manrope'] tracking-wide h-[31px] px-[107px] py-1.5 bg-blue rounded-[40px] md:justify-center items-center gap-2 inline-flex md:w-[255px]  xl:w-[255px]"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            ) : (
              <div className="w-full flex text-zinc-500 text-base font-medium font-['Manrope'] tracking-wide gap-[12px]">
                <Svg
                  id={'icon-logout'}
                  size={24}
                  stroke={'#54ADFF'}
                  fill={'transparent'}
                />
                Log Out
              </div>
            )}
          </div>
        </div>
  </form>
  )
            }
//   return (
//     <Formik
//     initialValues={{
//       user: {
//         avatar: user.avatar,
//         name: user.name,
//         email: user.email,
//         birthday: user.birthday,
//         phone: user.phone,
//         city: user.city,
//       },
//     }}
//     validate={validate}
//     onSubmit={values => {
//       const updatedUser = {
//         avatar: values.user.avatar,
//         name: values.user.name,
//         email: values.user.email,
//         birthday: values.user.birthday,
//         phone: values.user.phone,
//         city: values.user.city,
//       };
      
//       console.log(previewAvatar);
//       handleUser(updatedUser);
//       setIsEdit(false);
//     }}
//   >
//     {({ initialValues, setFieldValue }) => (
//       <Form className="flex flex-col flex-wrap-reverse">
//         <div className="absolute top-[14px] right-[14px]">
//           {!isEdit ? (
//             <div onClick={() => setIsEdit(true)}>
//               <EditIcon />
//             </div>
//           ) : (
//             <div
//               onClick={() => {
//                 setIsEdit(false);
//                 setFieldValue('user.name', user.name);
//                 setFieldValue('user.email', user.email);
//                 setFieldValue('user.birthday', user.birthday);
//                 setFieldValue('user.phone', user.phone);
//                 setFieldValue('user.city', user.city);
//                 console.log(initialValues);
//               }}
//             >
//               <CloseIcon />
//             </div>
//           )}
//         </div>
//         <div className="mdOnly:flex flex-row-reverse gap-[71px]">
//           <div className="flex justify-center">
//             <label
//               htmlFor="user.avatar"
//               className="flex justify-center flex-col gap-[5px]"
//             >
//               <div className="flex justify-center mb-[14px]">
//                 <img
//                   className="w-[182px] h-[182px] rounded-[40px] object-cover"
//                   src={previewAvatar ? previewAvatar : user.avatar}
//                   alt="User Avatar"
//                 />
//               </div>
//               <div
//                 className={
//                   isEdit
//                     ? 'flex flex-row justify-center gap-[5px] mb-[21px]'
//                     : 'flex flex-row justify-center gap-[5px] mb-[21px] opacity-0'
//                 }
//               >
//                 <PhotoIcon />
//                 Edit photo
//               </div>
//             </label>

//             <div>
//               <input
//                 className="hidden"
//                 type={isEdit ? 'file' : ''}
//                 id="user.avatar"
//                 name="user.avatar"
//                 accept="image/*"
//                 onChange={e => {
//                   const file = e.target.files[0];
//                   const localPath = URL.createObjectURL(file);
//                   setFieldValue('user.avatar', file);(file);
//                   setUserImagePath(localPath);
//                   previewFile(file)
//                 }}
//               />
//             </div>
//           </div>
//           <div className="flex flex-col gap-[20px]">
//             <div className="flex justify-between">
//               <label
//                 className={labelStyle}
//                 htmlFor="user.name"
//               >
//                 Name:
//               </label>
//               <Field
//                 className={inputStyle}
//                 type="text"
//                 id="user.name"
//                 name="user.name"
//                 readOnly={!isEdit}
//               />
//             </div>
//             <div className="flex justify-between w-full">
//               <label
//                 className={labelStyle}
//                 htmlFor="user.email"
//               >
//                 Email:
//               </label>
//               <Field
//                 className={inputStyle}
//                 type="text"
//                 id="user.email"
//                 name="user.email"
//                 readOnly={!isEdit}
//               />
//             </div>

//             <div className="flex justify-between w-full">
//               <label
//                 className={labelStyle}
//                 htmlFor="user.birthday"
//               >
//                 Birthday:
//               </label>
//              <div className={inputStyle}>
//              <Field
//                 className='w-full'
//                 type="date"
//                 id="user.birthday"
//                 name="user.birthday"
//                 readOnly={!isEdit}
//               />
//              </div>
//             </div>

//             <div className="flex justify-between w-full">
//               <label
//                 className={labelStyle}
//                 htmlFor="user.phone"
//               >
//                 Phone:
//               </label>
//               <Field
//                 className={inputStyle}
//                 type="tel"
//                 id="user.phone"
//                 name="user.phone"
//                 readOnly={!isEdit}
//               />
//             </div>

//             <div className="flex justify-between">
//               <label
//                 className={labelStyle}
//                 htmlFor="user.city"
//               >
//                 City:
//               </label>
//               <Field
//                 className={inputStyle}
//                 type="text"
//                 id="user.city"
//                 name="user.city"
//                 readOnly={!isEdit}
//               />
//             </div>
//             {isEdit ? (
//               <div className="w-full h-6 flex justify-end">
//                 <button
//                   className="flex justify-center w-[248px] text-stone-50 text-sm font-bold font-['Manrope'] tracking-wide h-[31px] px-[107px] py-1.5 bg-blue rounded-[40px] md:justify-center items-center gap-2 inline-flex md:w-[255px]  xl:w-[255px]"
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//               </div>
//             ) : (
//               <div className="w-full flex text-zinc-500 text-base font-medium font-['Manrope'] tracking-wide gap-[12px]">
//                 <Svg
//                   id={'icon-logout'}
//                   size={24}
//                   stroke={'#54ADFF'}
//                   fill={'transparent'}
//                 />
//                 Log Out
//               </div>
//             )}
//           </div>
//         </div>
//       </Form>
//     )}
//   </Formik>
//   )
// }
