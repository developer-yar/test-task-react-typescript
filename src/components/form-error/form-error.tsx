import { FormKeys } from "@models/FormKeys";
import { ErrorMessage } from "formik";
import { FC } from "react";

import * as styles from "./form-error.module.scss";

interface FormErrorProps {
  name: FormKeys;
}

export const FormError: FC<FormErrorProps> = ({ name }) => {
  return <ErrorMessage component="p" name={name} className={styles.error} />;
};
