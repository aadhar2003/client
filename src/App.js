
import './App.css';
import Choice from './components/Choice/Choice';
import Jumbotron from './components/jumbotron/Jumbotron';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Jumbotron/>
      <Choice/>
    </div>
  );
}

export default App;
