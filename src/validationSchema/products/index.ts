import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  user_id: yup.string().nullable(),
});
