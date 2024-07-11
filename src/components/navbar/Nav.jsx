import React, { useEffect } from 'react';
import "./Nav.css";
import title from "./title.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Nav = () => {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);

  const handleLogout = async () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Function to determine if the nav item should have the active class
  const isActive = (path) => location.pathname === path;

  return (
    <div className="Nav">
      <div className="left">
        <Link to="/" role="button"> <img src={title} alt="Uncooked" /></Link>
      </div>
      <div className="right">
        <Link className={`navitem review ${isActive('/view') ? 'activeNavItem' : ''}`} to="/view" role="button">View</Link>
        <Link className={`navitem chat ${isActive('/gpt') ? 'activeNavItem' : ''}`} to="/gpt" role="button">ChatGPT</Link>
        <Link className={`navitem write ${isActive('/post') ? 'activeNavItem' : ''}`} to='/post'>Write</Link>
        {!localStorage.getItem("token") ?
          <Link className="navitem login" to='/login'>Login</Link>
          :
          <button className="navitem login" onClick={handleLogout} role="button">Logout</button>
        }
      </div>
    </div>
  );
};

export default Nav;