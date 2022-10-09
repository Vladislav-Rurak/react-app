import classNames from 'classnames';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import USER_SCHEMA from '../../utils/validationsSchemas';
import styles from './UserInfoForm.module.scss';

function UserInfoForm () {
  const initialValues = { firstName: '', lastName: '', age: '' };

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
      {formikProps => {
        const firstNameClassName = classNames(styles.input, {
          [styles.valid]:
            !formikProps.errors.firstName && formikProps.touched.firstName,
          [styles.invalid]:
            formikProps.errors.firstName && formikProps.touched.firstName,
        });

        const ageClassName = classNames(styles.input, {
          [styles.valid]: !formikProps.errors.age && formikProps.touched.age,
          [styles.invalid]: formikProps.errors.age && formikProps.touched.age,
        });

        return (
          <>
            <Form>
              <label className={styles.form}>
                <span>First Name:</span>
                <Field
                  className={firstNameClassName}
                  type='text'
                  name='firstName'
                  placeholder='Firstname'
                  autoFocus
                />
                <ErrorMessage
                  className={styles.error}
                  name='firstName'
                  component='span'
                />
              </label>
              <label>
                <span>Age</span>
                <Field
                  className={ageClassName}
                  name='age'
                  type='text'
                  placeholder='25'
                />
                <ErrorMessage
                  className={styles.error}
                  name='age'
                  component='span'
                />
              </label>

              <button type='sybmit'>Save</button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default UserInfoForm;
