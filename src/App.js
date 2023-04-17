
import './App.css';
import Nav from './components/navbar/Nav';
import About from './components/About/About';
import Recipecard from './components/Card/RecipeCard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <Recipecard/>
      <Footer/>
    </div>
  );
}

export default App;
