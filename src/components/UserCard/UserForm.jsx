import { CloseIcon } from '../CloseIcon/CloseIcon';
import { useEffect, useState } from 'react';
import { EditIcon } from '../EditIcon/EditIcon';
import { PhotoIcon } from '../PhotoIcon/PhotoIcon';
import { useFormik } from 'formik';
import Svg from '../Svg/Svg';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../Redux/auth/auth-selectors';
import { update } from '../../Redux/auth/auth-operations';
import { userSchema } from './UserSchema';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const errorTextStyle ="pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal top-6 left-[60px] xl:left-[85px]"
const hoverStyle = "transition duration-200 ease-in-out cursor-pointer hover:opacity-80"
const labelStyle =
  "text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] ";
const inputStyle =
  "text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide w-[190px] h-6 px-3 py-1 rounded-[20px] border border-blue-400 justify-start items-center gap-[191px] inline-flex md:w-[255px]  xl:w-[255px]";

export const UserForm = ({onTogleLeavingModal}) => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const [avatarFile, setAvatarFile] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [previewAvatar, setPreviewAvatar] = useState(null);
  const [changeAvatar, setChangeAvatar] = useState(false);
  const [confirmChangeAvatar, setConfirmChangeAvatar] = useState(false);

  useEffect(() => {
    if (!isEdit) {
      setPreviewAvatar('');
    }
  }, [isEdit]);

  const birthdayType = (date) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    const dateString = "2023-11-07T22:00:00.000Z";
  
    if (typeof date === 'string' && dateRegex.test(date)) {
      return date;
    }

    return Date.now()
  };


  const formik = useFormik({
    initialValues: {
      name: user.name || '',
      email: user.email || '',
      birthday: birthdayType(user.birthday),
      phone: user.phone || '',
      city: user.city || '',
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: userSchema,

    onSubmit: ({ name, email, birthday, phone, city }) => {
      const updateUser = {
        name,
        email,
        birthday,
        phone,
        city,
      };

      console.log('avatar--->', avatarFile);

      if (previewAvatar && confirmChangeAvatar) {
        updateUser.avatar = avatarFile;
        console.log('--->', updateUser.avatar);
      }

      const formData = createUserFormData(updateUser);
      dispatch(update(formData));
      setChangeAvatar(false);
      setIsEdit(false);
  
    },
  });

  const errors = formik.errors;
  const formikValues = formik.values;

  const createUserFormData = (data) => {
    const formData = new FormData();
    console.log('data===', data);
    formData.append('avatar', data.avatar);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('birthday', data.birthday);
    formData.append('phone', data.phone);
    formData.append('city', data.city);

    return formData;
  };

  function previewFile(file) {
    const reader = new FileReader();

    reader.onloadend = function () {
      setPreviewAvatar(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      setChangeAvatar(true);
    } else {
      return;
    }
  }

  const resetFields = () => {
    setIsEdit(false);
    setChangeAvatar(false);
    setConfirmChangeAvatar(false);
    formik.setFieldValue('name', user.name);
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
      <div className={`absolute top-[14px] right-[14px] ${hoverStyle}`}>
        {!isEdit ? (
          <div  onClick={() => setIsEdit(true)}>
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
                src={previewAvatar ? previewAvatar : user.avatarURL}
                alt="User Avatar"
              />
            </div>
            {!changeAvatar ? (
              <div
                className={
                  isEdit
                    ? `flex flex-row justify-center gap-[5px] mb-[21px] ${hoverStyle}`
                    : 'flex flex-row justify-center gap-[5px] mb-[21px] opacity-0'
                }
              >
                <PhotoIcon />
                Edit photo
              </div>
            ) : (
              <div className="flex justify-center mb-[14px] gap-2">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setChangeAvatar(false);
                    setConfirmChangeAvatar(true);
                  }}
                >
                  <Svg
                    id={'icon-check'}
                    size={24}
                    stroke={'#54ADFF'}
                    fill={'transparent'}
                    className={hoverStyle}
                  />
                </div>
                Confirm
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    setChangeAvatar(false);
                    setPreviewAvatar(null);
                  }}
                >
                  <Svg
                    id={'icon-trash'}
                    size={24}
                    stroke={'#54ADFF'}
                    fill={'transparent'}
                    className={hoverStyle}
                  />
                </div>
              </div>
            )}
          </label>

          <div>
            <input
              className="hidden"
              type={isEdit && !changeAvatar ? 'file' : ''}
              id="avatar"
              name="avatar"
              accept="image/jpeg, image/png"
              onChange={(e) => {
                const file = e.target.files[0];
                const localPath = URL.createObjectURL(file);
                previewFile(file);
                setAvatarFile(file)
              }}
            />
          </div>
        </div>

        {/* All text-fields */}
        <div className="flex flex-col gap-[20px]">
          {/* Name */}
          <div className="flex justify-between relative">
            <label className={labelStyle} htmlFor="name">
              Name:
            </label>
            <input
              className={`${inputStyle} ${errors['name'] && 'border-rose-400'}`}
              type="text"
              id="name"
              name="name"
              value={formikValues['name']}
              onChange={formik.handleChange}
              readOnly={!isEdit}
            />
            {errors['name'] && (
              <p className={errorTextStyle}>
                {errors['name']}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex justify-between w-full relative">
            <label className={labelStyle} htmlFor="email">
              Email:
            </label>
            <input
              className={`${inputStyle} ${errors['email'] && 'border-rose-400'}`}
              type="text"
              id="email"
              name="email"
              value={formikValues['email']}
              onChange={formik.handleChange}
              readOnly={!isEdit}
            />
                        {errors['email'] && (
              <p className={errorTextStyle}>
                {errors['email']}
              </p>
            )}
          </div>

          {/* Birthday */}
          <div className="flex justify-between w-full">
            <label className={labelStyle} htmlFor="birthday">
              Birthday:
            </label>

            {/* <input
              className={inputStyle}
              type="text"
              id="birthday"
              name="birthday"
              value={formikValues['birthday']}
              onChange={formik.handleChange}
              readOnly={!isEdit}
            /> */}
            <div>
              <DatePicker
                selected={
                  new Date(formikValues['birthday']) 
                }
                onChange={(date) => {

                  formik.setFieldValue('birthday', date);
                }}
                readOnly={!isEdit}
                dateFormat="dd-MM-yyyy"
                className={inputStyle}
              />
            </div>
          </div>

          {/* Phone */}
          <div className="flex justify-between w-full relative">
            <label className={labelStyle} htmlFor="phone">
              Phone:
            </label>
            <input
              className={`${inputStyle} ${errors['phone'] && 'border-rose-400'}`}
              type="tel"
              id="phone"
              name="phone"
              placeholder='+380000000000'
              value={formikValues['phone']}
              onChange={formik.handleChange}
              readOnly={!isEdit}
            />
             {errors['phone'] && (
              <p className={errorTextStyle}>
              {errors['phone']}
              </p>
            )}
          </div>

          {/* City */}
          <div className="flex justify-between relative">
            <label className={labelStyle} htmlFor="city">
              City:
            </label>
            <input
              className={`${inputStyle} ${errors['city'] && 'border-rose-400'}`}
              type="text"
              id="city"
              name="city"
              value={formikValues['city']}
              onChange={formik.handleChange}
              readOnly={!isEdit}
            />
            {errors['city'] && (
              <p className={errorTextStyle}>
                {errors['city']}
              </p>
            )}
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
            <div 
          onClick={onTogleLeavingModal}
            className="w-full flex text-zinc-500 text-base font-medium font-['Manrope'] tracking-wide ">
            <div className={`cursor-pointer hover:opacity-80 flex  gap-[12px] ${hoverStyle}`}>
            <Svg
                id={'icon-logout'}
                size={24}
                stroke={'#54ADFF'}
                fill={'transparent'}
              />
              Log Out
            </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};
