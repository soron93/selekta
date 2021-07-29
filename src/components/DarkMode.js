import React, { useState } from 'react';
import {
  Paper,
  Switch,
  Typography,
  createMuiTheme,
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
    type: darkMode ? 'light' : 'dark',
    //   type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={{ height: '0vh' }}>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        {/* <Typography variant="h1">
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        </Typography> */}
      </Paper>
    </ThemeProvider>
  );
};

export default App;