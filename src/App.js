import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Wines from './pages/Wines';
import Wine from './pages/Wine';
import WineNew from './pages/WineNew';

const App = () => {

  return (
    <>
      <header>
        <NavBar />     
      </header>

      <main>
        
        {/* TODO: link to All Wines and Search  */}
        {/* 
        <Search />
        <Link to="/wines">All Wines</Link>
        <Wines wines={WDB.wines} /> 
        */}

        <Switch>
          <Route exact path="/" component={Wines} />
          <Route path="/wines/new" component={WineNew} />
          <Route path="/search" component={Search} />
          <Route exact path="/wines" component={Wines} />
          <Route path="/wines/:objectId" render={routerProps =>
            <Wine {...routerProps} />
          } />
        </Switch>
      </main>

      <footer>
        {/* <p>Final project for General Assembly React Development course</p>
        <p>Copyright &copy; Irina Kramer 2021</p> */}
      </footer>
    </>
  );
}

export default App;
