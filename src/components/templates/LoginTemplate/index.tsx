/** @jsxImportSource @emotion/react */
import Header from '../../organisms/Header'
import LoginForm from '../../organisms/LoginForm'
import styles from './styles'

const LoginTemplate = () => {
  return (
    <main css={styles.main}>
      <Header/>
      <LoginForm
        initialValues={{email: '', password: ''}}
        onValid={async (values) => {
          console.log('login form values', values)
        }}
      />
    </main>
  );
}

export default LoginTemplate;
