import logo from './logo.svg';
import './App.css';
import Typography from '@mui/material/Typography';
import NavBar from './components/NavBar';
import girlCoder from './media/landing-page.svg'; 
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

function App() {

  const [mode, setMode] = React.useState('dark');

  const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
            backgroundColor: mode === 'dark' ? '#012030' : '#fff',
            boxShadow: 'none'
        }
      }
    },
  },
});

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <body className="App-body">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h3"
            nowrap
            component="a"
            sx={{
              mr: 1,
              display: { md: 'flex' },
              fontFamily: 'Fira Code, monospace',
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none'}}>Faith Summon</Typography>
              <Typography
              variant="h5" 
              nowrap
            component="a"
            sx={{
              mr: 1,
              display: { md: 'flex' },
              fontFamily: 'Fira Code, monospace',
              letterSpacing: '.3rem',
              color: '#9AEBA3',
              textDecoration: 'none'}}>
                FULL STACK DEVELOPER
              </Typography>
              </Box>
        <img src={girlCoder} style={{width: '30%', display: 'flex', alignContent: 'flex-end'}} ></img>
      </body>
    </div>
    </ThemeProvider>
  );
}

export default App;
