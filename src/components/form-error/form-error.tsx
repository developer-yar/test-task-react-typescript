import { ErrorMessage } from "formik";
import { IFormData } from "@models/IFormData";
import * as styles from "./form-error.module.scss";

interface FormErrorProps {
  name: keyof IFormData;
}

export const FormError: React.FC<FormErrorProps> = ({ name }) => {
  return <ErrorMessage component="p" name={name} className={styles.error} />;
};
