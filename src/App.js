
import {ThemeProvider} from 'styled-components';

import { useDarkMode } from './useDarkMode';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme } from './styles/theme';
import { darkTheme } from './styles/theme';
import Head from './components/sections/Head';
import Nav from './components/Nav';
import Footer from './components/Footer'

import Email from './components/Email';
import Social from './components/Social';
import Main from './components/Main';

/*
* Email and social are components I want to be visible on all pages, 
* hence I have them here in the App.js
* I also have the head and Darkmode hook.
* this will be used on all pages and in all components
*/


const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
    <Head />
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
        <div>
          <Nav theme={theme} toggleTheme={toggleTheme}/>
          
          <Email />
          <Social />
          <Main />

          <Footer />

         
        </div>
    </ThemeProvider>
    </>
  );
}



export default App;