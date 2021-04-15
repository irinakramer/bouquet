import { Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Search from './Search';
import Wines from './Wines';
import Wine from './Wine';
import WDB from './WDB';

const App = () => {
  console.log(WDB.wines)
  return (
    <>
      <header>
        <NavBar />     
      </header>

      <main>
        <Search />
        
        {/* TODO: link to All Wines */}
        <Link to="/wines">All Wines</Link>

        <Wines wines={WDB.wines} />

        {/* TODO: Set up proper routing */}
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/wines" component={Wines} />
          <Route path="/wines/:name" render={routerProps =>
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
