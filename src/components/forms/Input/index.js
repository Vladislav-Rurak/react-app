import classNames from 'classnames';
import { ErrorMessage, Field } from 'formik';
import React from 'react';

function Input (props) {
  const { label, name, classes, ...restProps } = props;

  return (
    <Field name={name}>
      {({ field, form: { errors, touched }, meta }) => {
        const inputClassName = classNames([classes.input], {
          [classes.valid]: !errors[name] && touched[name],
          [classes.invalid]: errors[name] && touched[name],
        });

        return (
          <label>
            <span>{label}</span>
            <input className={inputClassName} {...field} {...restProps} />
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

// const ageClassName = classNames(styles.input, {
//   [styles.valid]: !formikProps.errors.age && formikProps.touched.age,
//   [styles.invalid]: formikProps.errors.age && formikProps.touched.age,
// });
