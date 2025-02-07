import { FormKeys } from "@models/FormKeys";
import classNames from "classnames";
import { Field } from "formik";
import { FC } from "react";

import * as styles from "./form-input.module.scss";

interface FormInputProps {
  name: FormKeys;
  isInvalid?: boolean;
}

export const FormInput: FC<FormInputProps> = ({ name, isInvalid = false }) => {
  return (
    <Field
      className={classNames(styles.input, isInvalid && styles.error)}
      id={name}
      name={name}
    />
  );
};
