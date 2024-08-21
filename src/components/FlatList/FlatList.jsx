import { Link } from "react-router-dom";

const FlatList = (props) => {
  const flats = props.flatList.map((flat, index) => {
    return (
      <a key={index} onClick={() => props.updateSelected(flat)}>
        <li>{flat.location}</li>
      </a>
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
