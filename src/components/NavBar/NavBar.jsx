import { Link } from "react-router-dom";
import { AuthedUserContext } from "../../App";
import { useContext } from "react";
import "../NavBar/NavBar.css";
const NavBar = ({ handleSignout }) => {
  const user = useContext(AuthedUserContext);
  return (
    <>
      {user ? (
        <nav className="NavBar">
          <ul className="Nav">
            <li>Welcome, {user.username}</li>

            <li>
              <Link to="/Flats">Flats</Link>
            </li>

            <li>
              <Link to="/Flats/Owned">Owned Flats</Link>
            </li>

            <li>
              <Link to="Flats/yourRental">Your Rental</Link>
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
