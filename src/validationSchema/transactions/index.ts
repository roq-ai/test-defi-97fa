import * as yup from 'yup';

export const transactionValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  user_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
});
