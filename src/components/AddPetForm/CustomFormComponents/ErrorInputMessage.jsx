import { ErrorMessage } from 'formik';

export const ErrorInputMessage = ({
  inputName,
  styles = 'absolute -bottom-[20px] text-red text-xs font-normal',
}) => (
  <ErrorMessage name={inputName}>
    {(message) => <p className={styles}>{message}</p>}
  </ErrorMessage>
);
