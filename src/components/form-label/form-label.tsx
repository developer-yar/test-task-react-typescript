import { FC } from "react";
import { FormKeys } from "@models/FormKeys";
import * as styles from "./form-label.module.scss";

interface FormLabelProps {
  labelText: string;
  htmlFor: FormKeys;
}

export const FormLabel: FC<FormLabelProps> = ({ labelText, htmlFor }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {labelText}
    </label>
  );
};
