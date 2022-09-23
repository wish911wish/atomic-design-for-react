/** @jsxImportSource @emotion/react */
// import TextBox from '../../atoms/TextBox'
// import { ComponentPropsWithoutRef } from "react"
import { PrimaryButton } from '../../atoms/Button';
import TextBoxWithTitle from '../../molecules/TextBoxWithTitle';
// import { useId } from "react";
import styles from './styles'

type Values = {
  email: string;
  password: string;
};

type Props = {
  initialValues?: Partial<Values>;
  onValid: (values: Values) => Promise<void>;
};

// const defaultValues: Values = {
//   email: "",
//   password: "",
// };

const LoginForm = ({ initialValues, onValid }: Props) => {
  return (
    <form>
      <TextBoxWithTitle
        css={styles.textbox}
        labelProps={{ children: "ユーザー名" }}
        textboxProps={{
          placeholder: "田中 太郎",
        }}
        error={'errors.name?.message'}
      />
      <TextBoxWithTitle
        css={styles.textbox}
        labelProps={{ children: "メールアドレス" }}
        textboxProps={{
          placeholder: "example@gmail.com",
        }}
        error={'errors.email?.message'}
      />

      <PrimaryButton css={styles.button}>LOG IN</PrimaryButton>
    </form>
  );
}
export default LoginForm;
