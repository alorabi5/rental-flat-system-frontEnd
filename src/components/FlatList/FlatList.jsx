import { Link } from "react-router-dom";

import "../FlatList/FlatList.css";

const FlatList = (props) => {
  const flats = props.flatList.map((flat, index) => {
    return (
        <Link className="flatList"
          key={index}
          to={`${flat._id}`}
          onClick={() => props.updateSelected(flat)}
        >
          <li>{flat.location}</li>
        </Link>
    );
  });

  return (
    <>
      <main>
        <div>
          <h2>Flat List</h2>
          {!props.flatList.length ? <h2>No Flats Yet!</h2> : <ul>{flats}</ul>}

          {/* <button onClick={props.handleFormView}>
            {props.isFormOpen ? "Close Form" : "New Flats"}
          </button> */}
        </div>
      </main>
    </>
  );
};

export default FlatList;
