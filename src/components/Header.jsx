import { useState } from "react";
import { Link } from "react-router-dom";

const loggedInUser = () => {
  return false;
};

// nameing export
const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://static.vecteezy.com/system/resources/previews/008/947/590/original/food-house-logo-symbol-icon-template-stock-food-house-for-logo-design-free-vector.jpg"
        alt=""
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <header>
        <Title />
        <div className="nav-item">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/About">
              <li>About</li>
            </Link>
            <Link to="/Contact">
              <li>Contact</li>
            </Link>
            <li>Cart</li>
            {isLoggedIn ? (
              <li>
                <button onClick={() => setIsLoggedIn(false)}>Log In</button>
              </li>
            ) : (
              <li>
                <button onClick={() => setIsLoggedIn(true)}>Log Out</button>
              </li>
            )}

            <li></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
