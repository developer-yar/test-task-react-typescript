import { FC } from "react";

import * as styles from "./submit-form-error.module.scss";

interface SubmitFormErrorProps {
  isInvalid: boolean;
}
export const SubmitFormError: FC<SubmitFormErrorProps> = ({ isInvalid }) => {
  if (isInvalid) {
    return <p className={styles.error}>Форма заполнена некорректно</p>;
  }
};
