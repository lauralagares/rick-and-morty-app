import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import CharacterList from './components/characterList';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Header></Header>
    <CharacterList></CharacterList>
    <Footer></Footer>
    </>
  );
}

export default App;
