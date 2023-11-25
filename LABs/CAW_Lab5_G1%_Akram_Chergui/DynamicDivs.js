import React, { useState } from 'react';

const DynamicDivs = () => {
  const [divs, setDivs] = useState([]);
  const [formValues, setFormValues] = useState({
    height: '',
    width: '',
    backgroundColor: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newDiv = {
      height: formValues.height,
      width: formValues.width,
      backgroundColor: formValues.backgroundColor,
    };

    setDivs((prevDivs) => [...prevDivs, newDiv]);

    // Reset form values after submission
    setFormValues({
      height: '',
      width: '',
      backgroundColor: '',
    });
  };

  return (
    <div>
      <h1>Exo4</h1>
      
      <form onSubmit={handleFormSubmit}>
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={formValues.height}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Width:
          <input
            type="text"
            name="width"
            value={formValues.width}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Background Color:
          <input
            type="text"
            name="backgroundColor"
            value={formValues.backgroundColor}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Add Div</button>
      </form>

      <div>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              height: div.height,
              width: div.width,
              backgroundColor: div.backgroundColor,
              margin: '10px', // Add margin for better visibility
            }}
          >
            Div {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicDivs;
