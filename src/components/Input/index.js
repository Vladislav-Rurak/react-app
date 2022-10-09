import { ErrorMessage, Field } from 'formik';
import React from 'react';

function Input (props) {
  console.log('props :>> ', props);
  const { label, name, classes, ...restProps } = props;

  console.log('restProps :>> ', restProps);
  return (
    <Field name={name}>
      {({ field, form: { errors, touched }, meta }) => {
        return (
          <label>
            <span>{label}</span>
            <input {...field} {...restProps} />
            <ErrorMessage
              className={classes.error}
              name={field.name}
              component='span'
            />
          </label>
        );
      }}
    </Field>
  );
}

export default Input;

// const firstNameClassName = classNames(styles.input, {
//   [styles.valid]:
//     !formikProps.errors.firstName && formikProps.touched.firstName,
//   [styles.invalid]:
//     formikProps.errors.firstName && formikProps.touched.firstName,
// });

// const ageClassName = classNames(styles.input, {
//   [styles.valid]: !formikProps.errors.age && formikProps.touched.age,
//   [styles.invalid]: formikProps.errors.age && formikProps.touched.age,
// });
