// src/services/flatService.js
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/flat`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const create = async (formData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (error) {
    console.error("Error", error);
  }
};

const show = async (flatId) => {
  try {
    const res = await fetch(`${BASE_URL}/${flatId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default { index, create, show };
