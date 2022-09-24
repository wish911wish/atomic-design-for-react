/** @jsxImportSource @emotion/react */
import Header from '../../organisms/Header'
import LoginForm from '../../organisms/LoginForm'
import styles from './styles'
import { LoginInput } from "../../../services/api/login/type";

type Props = {
  initialValues: LoginInput,
  onValid: (values: LoginInput) => Promise<void>;
};

const LoginTemplate = ({initialValues, onValid}: Props) => {
  return (
    <main css={styles.main}>
      <Header/>
      <LoginForm
        initialValues={initialValues}
        onValid={onValid}
      />
    </main>
  );
}

export default LoginTemplate;
