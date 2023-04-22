
import './App.css';
import Nav from './components/navbar/Nav';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Trendingsection from './components/Trending/Trendingsection'

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <Trendingsection/>
      <Footer/>
    </div>
  );
}

export default App;
