import "./App.css";
import Nav from "./components/navbar/Nav";
import Footer from "./components/Footer/Footer";
import Gptpage from "./components/Gptpage/GptPage";
import Home from "./components/Home/Home";
import CardState from "./context/cards/CardState";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CardState>
        <Router>
          <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="gpt" element={<Gptpage/>} />
        </Routes>
          <Footer />
        </Router>
      </CardState>
    </div>
  );
}

export default App;
