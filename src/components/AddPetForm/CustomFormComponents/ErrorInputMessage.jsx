import { ErrorMessage } from 'formik';

export const ErrorInputMessage = ({
  inputName,
  containerStyles,
  styles = 'absolute -bottom-[20px] text-red text-xs font-normal',
}) => (
  <ErrorMessage name={inputName}>
    {(message) => {
      const defaultErrorMessage = <p className={styles}>{message}</p>;

      return containerStyles ? (
        <div className={containerStyles}>{defaultErrorMessage}</div>
      ) : (
        defaultErrorMessage
      );
    }}
  </ErrorMessage>
);
