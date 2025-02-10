import { ErrorMessage } from "formik";
import { FormKeys } from "@models/FormKeys";
import * as styles from "./form-error.module.scss";

interface FormErrorProps {
  name: FormKeys;
}

export const FormError: React.FC<FormErrorProps> = ({ name }) => {
  return <ErrorMessage component="p" name={name} className={styles.error} />;
};
