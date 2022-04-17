import * as yup from 'yup'

let schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
    // email: yup.string().email().required(),
  });

  export default schema