
import "./App.css";
import Nav from "./components/navbar/Nav";
import Footer from "./components/Footer/Footer";
import Gptpage from "./components/Gptpage/GptPage";
import Home from "./components/Home/Home";
import CardState from "./context/cards/CardState";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Post from './components/PostYour/Post';
import Login from "./components/Login/Login";
import Preview from "./components/Preview/Preview";
import View from "./components/View/View";
import SingleView from "./components/View/SingleView";

function App() {
  return (
    <div className="App">
      <CardState>
        <Router>
          <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="gpt" element={<Gptpage/>} />
          <Route path="post" element={<Post/>} />
          <Route path="login" element={<Login/>} />
          <Route path="preview" element={<Preview/>} />
          <Route path="view" element={<View/>} />
          <Route path="Sview" element={<SingleView/>} />
        </Routes>
          <Footer />
        </Router>
      </CardState>

    </div>
  );
}

export default App;
