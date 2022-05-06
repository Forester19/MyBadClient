import React from 'react';
import './App.css';
import MainTabsComponent from "./components/tabs/MainTabsComponent";
import {BrowserRouter} from "react-router-dom";
import {createTheme, PaletteOptions, ThemeProvider} from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
        palette: {
            primary: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        palette?: PaletteOptions;
    }
}

function App() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#ffffff'
            },
            secondary: {
                main: '#595959'
            }
        },
    });

  return (
    <div className="App">
      <header className="App-header">
          <BrowserRouter>
              <ThemeProvider theme={theme}>
              <MainTabsComponent />
              </ThemeProvider>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
