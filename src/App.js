import "./App.css";
import Nav from "./components/navbar/Nav";
import Footer from "./components/Footer/Footer";
import Gptpage from "./components/Gptpage/GptPage";
import Home from "./components/Home/Home";
import CardState from "./context/cards/CardState";

function App() {
  return (
    <div className="App">
      <CardState>
        <Nav />
        {/* <Home/> */}
        <Gptpage />
        <Footer />
      </CardState>
    </div>
  );
}

export default App;
