import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
const NavBar = ({ user, handleSignout }) => {
  return (
    <>
      {user ? (
        <nav className="NavBar">
          <ul className="Nav">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/flats">Flats</Link>
            </li>

            <li>
              <Link to="/flats/owned">Owned Flats</Link>
            </li>

            <li>
              <Link to="/rental">Your Rental</Link>
            </li>

            <li>
              <Link to="flats/new">New Flat</Link>
            </li>

            <li>
              <Link to="" onClick={handleSignout}>
                Sign Out
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
export default NavBar;
