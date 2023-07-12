import * as yup from 'yup';

export const auditLogValidationSchema = yup.object().shape({
  action: yup.string().required(),
  user_id: yup.string().nullable(),
});
