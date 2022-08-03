import image from "/Users/aidenfine/react-tut/src/images/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>
        <img
          className={classes.logo}
          src={image}
          height={75}
          width={100}
          alt="logo"
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Meet Ups</Link>
          </li>
          <li>
            <Link to="/">Create a Meet</Link>
          </li>
          <li>
            <Link to="/">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
