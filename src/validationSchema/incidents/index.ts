import * as yup from 'yup';

export const incidentValidationSchema = yup.object().shape({
  description: yup.string().required(),
  user_id: yup.string().nullable(),
});
