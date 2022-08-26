import image from "../layout/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div>
        <Link to="/">
        <img
          className={classes.logo}
          src={image}
          height={75}
          width={100}
          alt="logo"
        />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Meet Ups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Create a Meet</Link>
          </li>
          <li>
            <Link to="/favorites">My Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
