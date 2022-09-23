/** @jsxImportSource @emotion/react */
import TextBox from '../../atoms/TextBox'
import { ComponentPropsWithoutRef } from "react"
import { PrimaryButton } from '../../atoms/Button';
import styles from './styles'

const MailAuthForm = ({ onSubmit, ...props }: ComponentPropsWithoutRef<'form'>) => (
  <form { ...props }>
    <p css={ styles.label }>メールを入力してください</p>
    <div css={ styles.controls }>
      <TextBox css={ styles.textbox} />
      <PrimaryButton>認証メール送信</PrimaryButton>
    </div>
  </form>
);

export default MailAuthForm;
