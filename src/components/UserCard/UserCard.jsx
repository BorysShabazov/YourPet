import { CloseIcon } from '../CloseIcon/CloseIcon';
import { useState } from 'react';
import { EditIcon } from '../EditIcon/EditIcon';
import { PhotoIcon } from '../PhotoIcon/PhotoIcon';
import { Formik, Form, Field } from 'formik';

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
  const [isEdit, setIsEdit] = useState(false);

  const validate = (values) => {
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

  return (
    <div className="mb-[42px]">
      <h2
        onClick={() => {
          console.log(user);
        }}
        className="text-black text-xl font-medium font-['Manrope'] tracking-wide mb-[18px] md:text-[28px]"
      >
        My information:
      </h2>

      <div className="relative w-[280px] bg-white rounded-[20px] shadow pt-[20px] pb-[24px] px-[8px] md:w-[704px] md:px-[20px] xl:w-[395px] rounded-[20px]">
        <div className="mdOnly:flex flex-row-reverse justify-center items-center gap-[70px]">
          <div className="flex justify-center mb-[14px]">
            <img
              className="w-[182px] h-[182px] rounded-[40px] object-cover"
              src={user.avatar}
              alt="User Avatar"
            />
          </div>
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
            onSubmit={(values) => {
              const updatedUser = {
                avatar: values.user.avatar,
                name: values.user.name,
                email: values.user.email,
                birthday: values.user.birthday,
                phone: values.user.phone,
                city: values.user.city,
              };

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
                        setFieldValue('user.avatar', user.avatar);
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
                <div className="flex justify-center mb-[24px] h-[24px]  md:w-[355px]">
                  {isEdit && (
                    <label
                      htmlFor="user.avatar"
                      className="flex justify-center flex-row gap-[5px]"
                    >
                      <PhotoIcon />
                      Edit photo
                    </label>
                  )}
                  <input
                    className="hidden"
                    type="file"
                    id="user.avatar"
                    name="user.avatar"
                    accept="image/*"
                    onChange={(event) => {
                      let formData = new FormData();
                      formData.append('photo', event.target.files[0]);
                      // setFieldValue('user.avatar', URL.createObjectURL(event.target.files[0]));
                      // setUser({
                      //   ...user,
                      //   avatar: URL.createObjectURL(formData.get('photo')),
                      // });
                    }}
                  />
                </div>
                <div className="flex flex-col gap-[20px] mb-[26px]">
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
                </div>
                <button
                  className="flex justify-center w-[248px] text-stone-50 text-sm font-bold font-['Manrope'] tracking-wide w-full h-[31px] px-[107px] py-1.5 bg-blue rounded-[40px] justify-center items-center gap-2 inline-flex md:w-[255px]  xl:w-[255px]"
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
