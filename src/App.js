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

const App = () => {

  return (
    <>
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
    </>
  );
}

export default App;
