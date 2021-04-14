import './App.css';
import NavBar from './components/NavBar';
import Search from './Search';
import Wines from './Wines';
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
      <Wines wines={WDB.wines} />

    </main>

    <footer>
      {/* <p>Final project for General Assembly React Development course</p>
      <p>Copyright &copy; Irina Kramer 2021</p> */}
    </footer>
    </>
  );
}

export default App;
