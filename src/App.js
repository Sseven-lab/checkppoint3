import React from 'react';
import MyRouter from './Router';
import 'semantic-ui-css/semantic.min.css'
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <MyRouter />
    </div>
    </ThemeProvider>

  );
}

export default App;
