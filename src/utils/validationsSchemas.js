import * as yup from 'yup';

const USER_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2)
    .max(60)
    .matches(/^[A-Z][a-z]*$/, 'First Name must be...')
    .required(),
  age: yup
    .number()
    .min(0)
    .max(130)
    .integer()
    .required(),
});

export default USER_SCHEMA;

// const isUserValid = USER_SCHEMA.isValidSync(user);
// console.log('isUserValid :>> ', isUserValid);

// try {
//   const validatingUser = USER_SCHEMA.validateSync(user);
//   console.log('validatingUser :>> ', validatingUser);
// } catch (e) {
//   console.log('e :>> ', e);
// }

// USER_SCHEMA.validate(user)
//   .then(validetingUser =>
//     console.log('validetingUser from then:>> ', validetingUser)
//   )
//   .catch(console.log('e :>> ', e));
