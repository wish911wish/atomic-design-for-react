/** @jsxImportSource @emotion/react */
import { PrimaryButton } from '../../atoms/Button';
import TextBoxWithTitle from '../../molecules/TextBoxWithTitle';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from './styles'
import { z } from "zod";

export const LoginInputSchema = z.object({
  password: z.string().min(1, "パスワードを入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .email("不正なメールアドレス形式です"),
});

type Values = {
  email: string;
  password: string;
};

type Props = {
  initialValues?: Partial<Values>;
  onValid: (values: Values) => Promise<void>;
};

const defaultValues: Values = {
  email: "",
  password: "",
};

const LoginForm = ({ initialValues, onValid }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { ...defaultValues, ...initialValues },
    resolver: zodResolver(LoginInputSchema),
  });

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <TextBoxWithTitle
        css={styles.textbox}
        labelProps={{ children: "パスワード" }}
        textboxProps={{
          ...register('password'),
          placeholder: '',
        }}
        error={errors.password?.message}
      />
      <TextBoxWithTitle
        css={styles.textbox}
        labelProps={{ children: "メールアドレス" }}
        textboxProps={{
          ...register('email'),
          placeholder: 'example@gmail.com',
        }}
        error={errors.email?.message}
      />

      <PrimaryButton css={styles.button}>LOG IN</PrimaryButton>
    </form>
  );
}
export default LoginForm;
