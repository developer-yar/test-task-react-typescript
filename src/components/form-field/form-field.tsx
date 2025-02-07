import { FC } from "react";
import { ReactElement } from "react";

import * as styles from "./form-field.module.scss";

interface FormFieldProps {
  children: ReactElement | ReactElement[];
}

export const FormField: FC<FormFieldProps> = ({ children }) => {
  return <div className={styles.field}>{children}</div>;
};
