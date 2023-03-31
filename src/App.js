import "./App.css";
import Choice from "./components/Choice/Choice";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login_page/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

          <Routes>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
          <Jumbotron />
          <Choice />
      </Router>
    </div>
  );
}

export default App;
