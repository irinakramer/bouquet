import './App.css';
import NavBar from './components/NavBar';
import Search from './Search';
import Wines from './Wines';

function App() {
  return (
    <>
    <header>
      <NavBar />     
    </header>

    <main>
      <Search />
      <Wines />

    </main>

    <footer>
      <p>Final project for General Assembly React Development course</p>
      <p>Copyright &copy; Irina Kramer 2021</p>
    </footer>
    </>
  );
}

export default App;
