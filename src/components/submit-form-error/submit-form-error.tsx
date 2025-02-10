import * as styles from "./submit-form-error.module.scss";

interface SubmitFormErrorProps {
  isInvalid: boolean;
}
export const SubmitFormError: React.FC<SubmitFormErrorProps> = ({
  isInvalid,
}) => {
  if (isInvalid) {
    return <p className={styles.error}>Форма заполнена некорректно</p>;
  }
};
