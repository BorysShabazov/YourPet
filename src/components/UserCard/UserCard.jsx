import { CloseIcon } from '../CloseIcon/CloseIcon';
import { useEffect, useState } from 'react';
import { EditIcon } from '../EditIcon/EditIcon';
import { PhotoIcon } from '../PhotoIcon/PhotoIcon';
import { Formik, Form, Field, useFormik } from 'formik';
import Svg from '../Svg/Svg';

const UserCard = () => {
  const userData = {
    avatar:
      'https://burst.shopifycdn.com/photos/professional-man-portrait.jpg?width=1000&format=pjpg&exif=0&iptc=0',
    name: 'John',
    email: 'john.doe@mail.com',
    birthday: '1990-12-20',
    phone: '0000-0000-00-00',
    city: 'London',
  };

  const [user, setUser] = useState(userData || {});
  const [userImagePath, setUserImagePath] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [previewAvatar, setPreviewAvatar] = useState('');
  
  useEffect(() => {
    if(!isEdit) {
      setPreviewAvatar('')
    }
  }, [isEdit])
  

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
    } else {
      return
    }
  }

  return (
    <div className="relative w-[280px] bg-white rounded-[20px] shadow pt-[20px] pb-[24px] px-[8px] md:w-[704px] md:px-[20px] xl:w-[395px] rounded-[20px]">
      <div className="mdOnly:flex flex-row-reverse justify-center items-center gap-[70px]">
        <Formik
          initialValues={{
            user: {
              avatar: user.avatar,
              name: user.name,
              email: user.email,
              birthday: user.birthday,
              phone: user.phone,
              city: user.city,
            },
          }}
          validate={validate}
          onSubmit={values => {
            const updatedUser = {
              avatar: values.user.avatar,
              name: values.user.name,
              email: values.user.email,
              birthday: values.user.birthday,
              phone: values.user.phone,
              city: values.user.city,
            };
            
            console.log(previewAvatar);
            setUser(updatedUser);
            setIsEdit(false);
          }}
        >
          {({ initialValues, setFieldValue }) => (
            <Form className="flex flex-col flex-wrap-reverse">
              <div className="absolute top-[14px] right-[14px]">
                {!isEdit ? (
                  <div onClick={() => setIsEdit(true)}>
                    <EditIcon />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      setIsEdit(false);
                      setFieldValue('user.name', user.name);
                      setFieldValue('user.email', user.email);
                      setFieldValue('user.birthday', user.birthday);
                      setFieldValue('user.phone', user.phone);
                      setFieldValue('user.city', user.city);
                      console.log(initialValues);
                    }}
                  >
                    <CloseIcon />
                  </div>
                )}
              </div>
              <div className="mdOnly:flex flex-row-reverse gap-[71px]">
                <div className="flex justify-center">
                  <label
                    htmlFor="user.avatar"
                    className="flex justify-center flex-col gap-[5px]"
                  >
                    <div className="flex justify-center mb-[14px]">
                      <img
                        className="w-[182px] h-[182px] rounded-[40px] object-cover"
                        src={previewAvatar}
                        alt="User Avatar"
                      />
                    </div>
                    <div
                      className={
                        isEdit
                          ? 'flex flex-row justify-center gap-[5px] mb-[21px]'
                          : 'flex flex-row justify-center gap-[5px] mb-[21px] opacity-0'
                      }
                    >
                      <PhotoIcon />
                      Edit photo
                    </div>
                  </label>

                  <div>
                    <input
                      className="hidden"
                      type={isEdit ? 'file' : ''}
                      id="user.avatar"
                      name="user.avatar"
                      accept="image/*"
                      onChange={e => {
                        const file = e.target.files[0];
                        const localPath = URL.createObjectURL(file);
                        setFieldValue('user.avatar', file);(file);
                        setUserImagePath(localPath);
                        previewFile(file)
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <div className="flex justify-between">
                    <label
                      className="text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] "
                      htmlFor="user.name"
                    >
                      Name:
                    </label>
                    <Field
                      className="text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide w-[190px] h-6 px-3 py-1 rounded-[20px] border border-blue-400 jstify-start items-center gap-[191px] inline-flex  md:w-[255px]"
                      type="text"
                      id="user.name"
                      name="user.name"
                      readOnly={!isEdit}
                    />
                  </div>
                  <div className="flex justify-between w-full">
                    <label
                      className="text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] "
                      htmlFor="user.email"
                    >
                      Email:
                    </label>
                    <Field
                      className="text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide w-[190px] h-6 px-3 py-1 rounded-[20px] border border-blue-400 justify-start items-center gap-[191px] inline-flex md:w-[255px]  xl:w-[255px]"
                      type="text"
                      id="user.email"
                      name="user.email"
                      readOnly={!isEdit}
                    />
                  </div>

                  <div className="flex justify-between w-full">
                    <label
                      className="text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] "
                      htmlFor="user.birthday"
                    >
                      Birthday:
                    </label>
                    <Field
                      className="text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide w-[190px] h-6 px-3 py-1 rounded-[20px] border border-blue-400 justify-start md:w-[255px]  xl:w-[255px]"
                      type="date"
                      id="user.birthday"
                      name="user.birthday"
                      readOnly={!isEdit}
                    />
                  </div>

                  <div className="flex justify-between w-full">
                    <label
                      className="text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] "
                      htmlFor="user.phone"
                    >
                      Phone:
                    </label>
                    <Field
                      className="text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide w-[190px] h-6 px-3 py-1 rounded-[20px] border border-blue-400 justify-start items-center gap-[191px] inline-flex md:w-[255px]  xl:w-[255px]"
                      type="tel"
                      id="user.phone"
                      name="user.phone"
                      readOnly={!isEdit}
                    />
                  </div>

                  <div className="flex justify-between">
                    <label
                      className="text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] "
                      htmlFor="user.city"
                    >
                      City:
                    </label>
                    <Field
                      className="text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide w-[190px] h-6 px-3 py-1 rounded-[20px] border border-blue-400 justify-start items-center gap-[191px] inline-flex md:w-[255px]  xl:w-[255px]"
                      type="text"
                      id="user.city"
                      name="user.city"
                      readOnly={!isEdit}
                    />
                  </div>
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserCard;
