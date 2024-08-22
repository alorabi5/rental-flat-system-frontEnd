import { useState } from "react";
import "../FlatForm/FlatForm.css";
const FlatForm = (props) => {
  const initialState = {
    price: 0,
    location: "",
    isBooked: false,
    imageUrl: "",
    imageAlt: "",
    description: "",
  };

  const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState
  );

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.selected) {
      props.handleUpdateFlat(formData, props.selected._id);
    } else {
      props.handleAddFlat(formData);
    }
    setFormData(initialState);
  };

  return (
    <div class="container">
      <div class="flat-form">
        <h2>Flat Form</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="price">Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="location">Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="isBooked">Is Booked:</label>
            <input
              type="checkbox"
              name="isBooked"
              checked={formData.isBooked}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="imageUrl">Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="imageAlt">Image Alt:</label>
            <input
              type="text"
              name="imageAlt"
              value={formData.imageAlt}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="description">Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <button type="submit">Add New Flat</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlatForm;
