import React , {useEffect} from 'react'
import "./Nav.css";
import title from "./title.png";
import { Link, Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Nav = () => {


  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);

  const handleLogout= async() => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div className="Nav">
      <div className="left">
        <img src={title} alt="Uncooked" />
      </div>
      <div className="right">
        <Link className="navitem review" to="/" role="button">Home</Link>
        <Link className="navitem chat" to="/gpt" role="button">ChatGPT</Link>

        <Link className="navitem write" to='/post'>Write</Link>
        {!localStorage.getItem("token")?
        <Link className="navitem login" to='/login'>Login</Link>
        :
        <button className="navitem login"  onClick={handleLogout} role="button" >Logout</button>

        }
      </div>
    </div>
  );
};

export default Nav;
