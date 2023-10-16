import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
colors: {
  yellow: "#eff24b",
  green: "#038225",
  blue: "#37c8de",
  pinck: "#f268d7",
  orange: "#f57e2f",
}, 
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={{theme}}>
      <App />
      <GlobalStyle/>
      </ThemeProvider>
  </React.StrictMode>
);
