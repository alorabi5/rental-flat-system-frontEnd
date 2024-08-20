// src/services/petService.js
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/flat`;

const index = async () => {
    try {
      const res = await fetch(BASE_URL);
      return res.json();
    } catch (err) {
      console.log(err);
    }
};


const create = async (formData) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const res = await fetch(BASE_URL, options);

  return res.json();
};


export { index, create };