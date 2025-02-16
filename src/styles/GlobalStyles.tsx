import { Global, css } from '@emotion/react';
import { styleToken } from '../styles';

export const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      body {
        display: flex;
        flex-direction: column;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-color: ${styleToken.color.gray200};
        margin: 0 auto;
      }
    `}
  />
);
