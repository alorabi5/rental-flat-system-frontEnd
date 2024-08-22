import { Link } from "react-router-dom";

const FlatList = (props) => {
  const flats = props.flatList.map((flat) => {
    return (
      <Link key={flat._id} to={`/flats/${flat._id}`} onClick={() => props.updateSelected(flat)}>
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
        </div>
      </main>
    </>
  );
};

export default FlatList;
