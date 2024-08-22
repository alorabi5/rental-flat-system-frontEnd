
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import authService from "./services/authService";
import flatService from "./services/flatService";

// Components
import NavBar from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import SignupForm from "./components/SignupForm/SignupForm";
import SigninForm from "./components/SigninForm/SigninForm";
import FlatList from "./components/FlatList/FlatList";
import FlatForm from "./components/FlatForm/FlatForm";
import RentalDetails from "./components/RentalDetails/RentalDetails";
import FlatDetails from "./components/FlatDetails/FlatDetails";


const App = () => {
  const [user, setUser] = useState(authService.getUser()); // using the method from authservice
  const [flatList, setFlatList] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate()

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  const updateSelected = (flat) => {
    setSelected(flat);
  };


  // ------------------------ Flat Form ------------------------



  const handleAddFlat = async (formData) => {
      const newFlat = await flatService.create(formData);
      setFlatList([newFlat, ...flatList]);
      navigate('/flats')
  };

  useEffect(() => {
    const getFlat = async () => {
      const flatData = await flatService.index();
      setFlatList(flatData);
    };

    if (user) {
      getFlat();
    }
  }, [user]);

  const handleUpdateFlat = async (formData, flatId) => {
      const updatedFlat = await flatService.updateFlat(formData, flatId);

      const updatedflatList = flatList.map((flat) =>
        // If the id of the current flat is not the same as the updated flat's id, return the existing flat. If the id's match, instead return the updated flat.
        flat._id !== updatedFlat._id ? flat : updatedFlat
      );
      // Set flatList state to this updated array
      setFlatList(updatedflatList);
      // If we don't set selected to the updated flat object, the details page will reference outdated data until the page reloads.
      setSelected(updatedFlat);
  };

  return (
    <>
      <NavBar user={user} handleSignout={handleSignout} />
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route
              path="/flats"
              element={
                <FlatList
                  flatList={flatList}
                  updateSelected={updateSelected}
                />
              }
            />

            <Route
              path="/flats/new"
              element={
                <FlatForm
                  handleAddFlat={handleAddFlat}
                  selected={selected}
                  handleUpdateFlat={handleUpdateFlat}
                />
              }
            />

            <Route
              path="/flats/:flatId"
              element={
                <FlatDetails
                  selected={selected}
                  handleUpdateFlat={handleUpdateFlat}
                />
              }
            />

            {/* <Route
              path="/rentals/:rentalId"
              element={<RentalDetails user={user} />}
            /> */}
          </>
        ) : (
          <Route path="/" element={<Landing />} />
        )}
        <Route path="/signup" element={<SignupForm setUser={setUser} />} />
        <Route path="/signin" element={<SigninForm setUser={setUser} />} />
      </Routes>
    </>
  );
};

export default App;
