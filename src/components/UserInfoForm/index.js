import { ErrorMessage, Field, Form, Formik } from 'formik';
import USER_SCHEMA from '../../utils/validationsSchemas';

function UserInfoForm () {
  const initialValues = { firstName: '', lastName: '', age: null };

  const handleSubmit = (values, formikBag) => {
    console.log('values :>> ', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={USER_SCHEMA}
    >
      {formikProps => {
        return (
          <>
            <Form>
              <Field
                type='text'
                name='firstName'
                placeholder='Firstname'
                autoFocus
              />
              {/* {formikProps.errors.firstName &&
                formikProps.touched.firstName && (
                  <span>{formikProps.errors.firstName}</span>
                )} */}
              <ErrorMessage name='firstName' />
              <button type='sybmit'>Save</button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default UserInfoForm;
