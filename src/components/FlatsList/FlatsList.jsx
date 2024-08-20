import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";

const FlatsList = () => {
  return (
    <>
      <main>
        <Link to="/Flats/:FlatId">
          <h1>onClick</h1>
        </Link>
      </main>
    </>
  );
};

export default FlatsList;
