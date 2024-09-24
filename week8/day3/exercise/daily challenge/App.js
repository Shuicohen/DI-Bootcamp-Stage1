import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    nutsFree: false,
    lactoseFree: false,
    vegan: false
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    // Create URL with form data as query parameters
    const queryParams = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      gender: formData.gender,
      destination: formData.destination,
      nutsFree: formData.nutsFree,
      lactoseFree: formData.lactoseFree,
      vegan: formData.vegan,
    }).toString();

    // Redirect to the new URL with the query params
    window.location.href = `/submit?${queryParams}`;
  }

  return (
    <div>
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;