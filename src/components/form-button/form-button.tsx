import * as styles from "./form-button.module.scss";

interface FormButtonProps {
  buttonText: string;
  type?: "button" | "submit" | "reset";
}

export const FormButton: React.FC<FormButtonProps> = ({
  buttonText,
  type = "submit",
}) => {
  return (
    <button type={type} className={styles.button}>
      {buttonText}
    </button>
  );
};
