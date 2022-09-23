/** @jsxImportSource @emotion/react */
import TextBox from '../../atoms/TextBox'
import Txt, {WarningTxt} from '../../atoms/Txt'
import { ComponentPropsWithoutRef, ComponentPropsWithRef, useId } from "react"
import clsx from 'clsx';
import styles from './styles'

type Props = {
  className?: string;
  titleLevel?: 3 | 4 | 5 | 6;
  labelProps: Omit<ComponentPropsWithoutRef<"label">, "htmlFor" | "className">;
  textboxProps: Omit<ComponentPropsWithRef<"input">, "id">;
  description?: string;
  error?: string;
};


const TextBoxWithTitle = ({
  className,
  titleLevel = 3,
  labelProps: { children, ...labelProps },
  textboxProps,
  description,
  error
}: Props) => {
  const descriptionId = useId();
  const errorMessageId = useId();
  return (
    <div className={clsx(className)} css={styles.module}>
      <label {...labelProps}>
        <span role="heading" aria-level={titleLevel} css={styles.title}>
          {children}
        </span>
        <TextBox
          {...textboxProps}
          className={clsx(textboxProps?.className)}
          css={[styles.textbox,]}
          aria-describedby={descriptionId}
          aria-invalid={!!error}
          aria-errormessage={errorMessageId}
        />
      </label>
      <div css={styles.bottom}>
        {description && (
          <Txt id={descriptionId} css={styles.description}>{description}</Txt>
        )}
        {error && (
          <WarningTxt id={errorMessageId} css={styles.error}>{error}</WarningTxt>
        )}
      </div>
    </div>
  )
};

export default TextBoxWithTitle;
