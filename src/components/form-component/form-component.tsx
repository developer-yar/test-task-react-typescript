import { FormButton } from "@components/form-button/form-button";
import { FormError } from "@components/form-error/form-error";
import { FormField } from "@components/form-field/form-field";
import { FormInput } from "@components/form-input/form-input";
import { FormLabel } from "@components/form-label/form-label";
import { SubmitFormError } from "@components/submit-form-error/submit-form-error";
import { FormKeys } from "@models/FormKeys";
import { IFormData } from "@models/IFormData";
import { Form, Formik, FormikErrors, FormikTouched } from "formik";
import { FC, memo } from "react";
import * as Yup from "yup";

import * as styles from "./form-component.module.scss";

const initialValues: IFormData = { name: "", age: 1, email: "" };

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Введите имя")
    .matches(/^[A-Za-zА-яЁё]+$/, "Имя должно состоять только из букв"),
  age: Yup.number()
    .required("Введите возраст")
    .transform((value, originalValue) =>
      /\s/.test(originalValue) ? NaN : value,
    )
    .positive("Возраст должен быть положительным числом")
    .typeError("Возраст должен состоять только из цифр"),
  email: Yup.string()
    .required("Введите email")
    .email("Некорректный формат email"),
});

export const FormComponent: FC = () => {
  const handleSubmit = (values: IFormData): void => {
    const message = `Имя: ${values.name}\nВозраст: ${values.age}\nEmail: ${values.email}`;
    setTimeout(() => alert(message), 200);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ errors, touched }) => (
        <>
          <Form className={styles.form}>
            <FieldWrapper
              name="name"
              label="Имя"
              errors={errors}
              touched={touched}
            />
            <FieldWrapper
              name="age"
              label="Возраст"
              errors={errors}
              touched={touched}
            />
            <FieldWrapper
              name="email"
              label="Email"
              errors={errors}
              touched={touched}
            />
            <FormButton buttonText="Проверить данные" />
          </Form>
          <SubmitFormError isInvalid={Object.keys(errors).length > 0} />
        </>
      )}
    </Formik>
  );
};

const FieldWrapper: FC<{
  name: FormKeys;
  label: string;
  errors: FormikErrors<IFormData>;
  touched: FormikTouched<IFormData>;
}> = memo(({ name, label, errors, touched }) => {
  const hasError: boolean = !!(touched[name] && errors[name]);

  return (
    <FormField>
      <FormLabel labelText={label} htmlFor={name} />
      <FormInput name={name} isInvalid={hasError} />
      <FormError name={name} />
    </FormField>
  );
});
