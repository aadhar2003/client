
import './App.css';
import Nav from './components/navbar/Nav';
import About from './components/About/About';
import Recipecard from './components/Card/RecipeCard';

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <Recipecard/>
    </div>
  );
}

export default App;
