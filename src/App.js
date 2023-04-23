import './App.css';
import Nav from './components/navbar/Nav';
import Footer from './components/Footer/Footer';
import Gptpage from './components/Gptpage/GptPage';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <Home/> */}
      <Gptpage/>
      <Footer/>
    </div>
  );
}

export default App;
