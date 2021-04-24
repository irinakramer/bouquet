import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Wines from './pages/Wines';
import Wine from './pages/Wine';
import WineNew from './pages/WineNew';
import WineEdit from './pages/WineEdit';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ce467b',
      main: '#c2185b',
      dark: '#87103f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffe69b',
      main: '#ffe082',
      dark: '#ffc107',
      contrastText: '#000',
    },
  },
  typography: {
    h1: {
      fontFamily: ['Merriweather','serif'].join(','),
      fontWeight: '900',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: ['Merriweather','serif'].join(','),
      fontWeight: '900',
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: ['Merriweather','serif'].join(','),
      fontWeight: '400',
      textTransform: 'uppercase',
    }
  },
})

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <header>
        <NavBar />     
      </header>

      <main>
        <Switch>        
          <Route path="/wines/new" component={WineNew} />
          <Route path="/wines/:objectId/edit" render={ routeProps => 
            <WineEdit {...routeProps} />
          } />
          <Route path="/wines/:objectId" render={routeProps =>
            <Wine {...routeProps} />
          } />
          <Route exact path="/" component={Wines} />
          <Route path="/search" component={Search} />
          <Route exact path="/wines" component={Wines} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>

      <footer>
        <Footer />
      </footer>
    </ThemeProvider>
  );
}

export default App;
