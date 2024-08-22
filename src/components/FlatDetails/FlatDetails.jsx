const FlatDetails = (props) => {
  if (!props.selected) {
    return <h2>No details to display</h2>;
  } else {
    return (
      <div>
        <img src={props.selected.imageUrl} alt={props.selected.imageAlt} />
        <h1>{props.selected.price}$</h1>
        <h2>
          Is Booked: {props.selected.isBooked ? "Available" : "Not Available"}
        </h2>
        <h2>Location: {props.selected.location}</h2>
        <h2>Description: {props.selected.description}</h2>

        <button
          onClick={() => {
            props.handleFormView(props.selected);
          }}
        >
          Edit Flate
        </button>

        <button onClick={() => props.handleRemoveFlat(props.selected._id)}>
          Delete
        </button>
      </div>
    );
  }
};

export default FlatDetails;
