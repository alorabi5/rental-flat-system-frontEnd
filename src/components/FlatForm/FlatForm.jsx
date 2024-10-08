import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../FlatForm/FlatForm.css";

const FlatForm = (props) => {

  const navigate = useNavigate();

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
    event.target.name === "isBooked"
      ? setFormData({ ...formData, [event.target.name]: event.target.checked })
      : setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.selected) {
      props.handleUpdateFlat(formData, props.selected._id);
    } else {
      props.handleAddFlat(formData);
    }
    setFormData(initialState);
    navigate("/flat");
  };

  return (
    <div class="container">
      <div class="flat-form">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label htmlFor="price">Price: </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label htmlFor="location">Location: </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label htmlFor="isBooked">isBooked: </label>
            <input
              type="checkbox"
              name="isBooked"
              checked={formData.isBooked}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label htmlFor="imageUrl">Image Url: </label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label htmlFor="imageAlt">Image Alt: </label>
            <input
              type="text"
              name="imageAlt"
              value={formData.imageAlt}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label htmlFor="description">Description: </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <br />
          <div class="form-group">
            <button type="submit">
              {props.selected ? "Update Flat" : "Add New Flat"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlatForm;
