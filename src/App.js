import React from 'react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Main } from './Main';
import theme from './theme';

const style = (
  <Global
    styles={theme => ({
      '*': { boxSizing: 'border-box' },
      body: {
        fontFamily: theme.fonts.body,
        color: theme.colors.text,
        background: theme.colors.primary,
        margin: 0,
      },
      '#root': {
        height: '100%',
        background: theme.colors.background,
      },
    })}
  />
);

export function App() {
  return (
    <ThemeProvider theme={theme}>
      {style}
      <Main />
    </ThemeProvider>
  );
}
