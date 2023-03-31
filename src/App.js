import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login_page/Login";
import Textbox from "./components/textbox/Textbox";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/test" element={<Textbox />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
