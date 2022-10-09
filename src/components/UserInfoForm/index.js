import classNames from 'classnames';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import USER_SCHEMA from '../../utils/validationsSchemas';
import Input from '../Input';
import styles from './UserInfoForm.module.scss';

function UserInfoForm () {
  const initialValues = { firstName: '', lastName: '', age: '' };
  const classes = {
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
    error: styles.error,
  };

  const handleSubmit = (values, formikBag) => {
    console.log('values :>> ', values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_SCHEMA}
    >
      <>
        <Form>
          <Input
            label='First Name:'
            type='text'
            name='firstName'
            placeholder='Firstname'
            autoFocus
            className={classes}
          />
          <Input
            label='Age'
            name='age'
            type='text'
            placeholder='25'
            className={classes}
          />

          <button type='sybmit'>Save</button>
        </Form>
      </>
    </Formik>
  );
}

export default UserInfoForm;
