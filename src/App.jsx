import { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import * as authService from './services/authService'; // import the authservice
import * as flatService from "./services/flatService";

import FlatForm from "./components/FlatForm/FlatForm";



export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(authService.getUser()); // using the method from authservice

  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };

  // ------------------------ Flat Form ------------------------

  const [flatList, setFlatList] = useState([]);
  const [selected, setSelected] = useState(null);

  const handleAddFlat = async (formData) => {
    try {
      const newFlat = await flatService.create(formData);
      setFlatList([newFlat, ...flatList]);
    } catch (error) {
      console.log(error);
    }
  };


  const handleUpdateFlat = async (formData, flatId) => {
    try {
      const updatedFlat = await flatService.updateFlat(formData, flatId);

      // handle potential errors
      if (updatedFlat.error) {
        throw new Error(updatedFlat.error);
      }

      const updatedflatList = flatList.map((flat) =>
        // If the id of the current flat is not the same as the updated flat's id, return the existing flat. If the id's match, instead return the updated flat.
        flat._id !== updatedFlat._id ? flat : updatedFlat
      );
      // Set flatList state to this updated array
      setFlatList(updatedflatList);
      // If we don't set selected to the updated flat object, the details page will reference outdated data until the page reloads.
      setSelected(updatedFlat);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AuthedUserContext.Provider value={user}>
        <NavBar user={user} handleSignout={handleSignout} />
        <FlatForm
          handleAddFlat={handleAddFlat}
          selected={selected}
          handleUpdateFlat={handleUpdateFlat}
        />
        <Routes>
          {user ? (
            <Route path="/" element={<Dashboard user={user} />} />
          ) : (
            <Route path="/" element={<Landing />} />
          )}
          <Route path="/signup" element={<SignupForm setUser={setUser} />} />
          <Route path="/signin" element={<SigninForm setUser={setUser} />} />
        </Routes>
      </AuthedUserContext.Provider>
    </>
  );
};

export default App;
