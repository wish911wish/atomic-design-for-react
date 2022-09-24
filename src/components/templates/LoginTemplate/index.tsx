/** @jsxImportSource @emotion/react */
import Header from '../../organisms/Header'
import LoginForm from '../../organisms/LoginForm'
import styles from './styles'
import { postLogin } from '../../../services/api/login'

const LoginTemplate = () => {
  return (
    <main css={styles.main}>
      <Header/>
      <LoginForm
        initialValues={{email: '', password: ''}}
        onValid={async (values) => {
          const { data, err } = await postLogin(values);
          if (data && data.user) {
            window.location.href = "/";
          }
          if (err) {
            window.alert("ログインに失敗しました");
          }
        }}
      />
    </main>
  );
}

export default LoginTemplate;
