import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { theme, useApollo } from '../src/Utils';
import { Global } from '../src/Components/Basic';

const ThemeDecorator = ({ children }) => {
  const apolloClient = useApollo();
  
  return (
    <ApolloProvider client={apolloClient}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <Global />
            {children}
          </MuiThemeProvider>
        </ThemeProvider>
      </StylesProvider>
    </ApolloProvider>
  );
};

export default ThemeDecorator;
