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

  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedData(formData); 
  }

  return (
    <div>
      <FormComponent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        submittedData={submittedData} 
      />
    </div>
  );
}

export default App;
