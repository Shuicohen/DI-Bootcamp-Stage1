import React from "react";

function FormComponent({ formData, handleChange, handleSubmit, submittedData }) {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-section">
        <h2>Sample form</h2>

        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="input-field"
        />
        <br />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="input-field"
        />
        <br />

        <label>Age</label>
        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="input-field"
        />
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <br />

        <label>Select your destination</label>
        <br/>
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="input-field"
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Japan">Japan</option>
          <option value="Thailand">Thailand</option>
          <option value="Brazil">Brazil</option>
          <option value="Germany">Germany</option>
        </select>
        <br />

        <label>Dietary restrictions:</label>
        <br />
        <input
          type="checkbox"
          name="nutsFree"
          checked={formData.nutsFree}
          onChange={handleChange}
        />{" "}
        Nuts free
        <br />
        <input
          type="checkbox"
          name="lactoseFree"
          checked={formData.lactoseFree}
          onChange={handleChange}
        />{" "}
        Lactose free
        <br />
        <input
          type="checkbox"
          name="vegan"
          checked={formData.vegan}
          onChange={handleChange}
        />{" "}
        Vegan
        <br />

        <button type="submit" className="submit-button">Submit</button>
      </form>

      {submittedData && ( // Conditionally render the information only after submission
        <div className="info-section">
          <h2>Entered information:</h2>
          <p>Your name: {submittedData.firstName} {submittedData.lastName}</p>
          <p>Your age: {submittedData.age}</p>
          <p>Your gender: {submittedData.gender}</p>
          <p>Your destination: {submittedData.destination}</p>
          <p>Your dietary restrictions:</p>
          <ul>
            <li>Nuts free: {submittedData.nutsFree ? "Yes" : "No"}</li>
            <li>Lactose free: {submittedData.lactoseFree ? "Yes" : "No"}</li>
            <li>Vegan: {submittedData.vegan ? "Yes" : "No"}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default FormComponent;
