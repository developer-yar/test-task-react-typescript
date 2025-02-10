import classNames from "classnames";
import { Field } from "formik";
import { FormKeys } from "@models/FormKeys";
import * as styles from "./form-input.module.scss";

interface FormInputProps {
  name: FormKeys;
  isInvalid?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  isInvalid = false,
}) => {
  return (
    <Field
      className={classNames(styles.input, isInvalid && styles.error)}
      name={name}
    />
  );
};
