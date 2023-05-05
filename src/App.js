import './App.css';
import Nav from './components/navbar/Nav';
import Footer from './components/Footer/Footer';
import Gptpage from './components/Gptpage/GptPage';
import Home from './components/Home/Home';
import Post from './components/PostYour/Post';

function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <Home/> */}
      <Gptpage/>
      {/* <Post/> */}
      <Footer/>
    </div>
  );
}

export default App;
