/** @jsxImportSource @emotion/react */
import LoginTemplate from '../templates/LoginTemplate'
import { postLogin } from '../../services/api/login'
import { LoginInput } from "../../services/api/login/type";

const onValidLogin = async (values: LoginInput) => {
  const { data, err } = await postLogin(values);
  if (data && data.user) {
    window.location.href = "/";
  }
  if (err) {
    window.alert("ログインに失敗しました");
  }
}

const LoginPage = () => {
  return (
    <LoginTemplate
      initialValues={{password: '', email: ''}}
      onValid={onValidLogin}
    />
  );
}

export default LoginPage;
