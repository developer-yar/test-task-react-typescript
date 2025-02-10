import * as styles from "./form-label.module.scss";

interface FormLabelProps {
  labelText: string;
}

export const FormLabel: React.FC<FormLabelProps> = ({ labelText }) => {
  return <label className={styles.label}>{labelText}</label>;
};
