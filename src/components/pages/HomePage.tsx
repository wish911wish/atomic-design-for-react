/** @jsxImportSource @emotion/react */
import logo from '../../logo.svg';
import { primary, background } from '../../styles/color'
import { css, keyframes }  from '@emotion/react'
import { Link } from "react-router-dom";

const app = css({
  textAlign: "center"
})

const appLogoSpin = keyframes({
  'from': {
    transform: 'rotate(0deg)'
  },
  'to': {
    transform: 'rotate(360deg)'
  }
})

const appLogo = css({
  height: '40vmin',
  pointerEvents: 'none',
  animation: `${appLogoSpin} infinite 20s linear`
})

const appHeader = css({
  backgroundColor: background,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
})

const appLink = css({
  color: primary,
})

function App() {
  return (
    <div css={app}>
      <header css={appHeader}>
        <img src={logo} css={appLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          css={appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/invoices" css={appLink}>Invoices</Link>
        <Link to="/expenses" css={appLink}>Expenses</Link>
        <Link to="/login" css={appLink}>Login</Link>
      </header>
    </div>
  );
}

export default App;
