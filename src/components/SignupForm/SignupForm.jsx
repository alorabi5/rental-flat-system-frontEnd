import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/authService";

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState([""]);
  const [formData, setFormData] = useState({
    username: "",
    isOwner: false, 
    password: "",
    passwordConf: "",
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    // Updated to handle checkbox change for isOwner
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUserResponse = await authService.signup(formData); // isOwner included in formData
      props.setUser(newUserResponse.user);
      navigate("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const { username, isOwner, password, passwordConf } = formData;

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    <main>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username" // Fixed id to match the label
            value={username}
            name="username"
            onChange={handleChange}
          />

          <label htmlFor="isOwner">Is Owner</label>
          <input
            type="checkbox"
            id="isOwner"
            name="isOwner"
            checked={isOwner} // Using isOwner state
            onChange={handleChange} // Updated to handle checkbox changes
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            type="password"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div>
          <button disabled={isFormInvalid()}>Sign Up</button>
          <Link to="/">
            <button type="button">Cancel</button> {/* Added type="button" to prevent form submission */}
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignupForm;
