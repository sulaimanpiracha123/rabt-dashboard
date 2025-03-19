import React, { useState } from "react";

const CountryNumberForm = () => {
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setErrors({ ...errors, country: "" }); // Clear country error when user selects a country
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
    setErrors({ ...errors, number: "" }); // Clear number error when user enters a number
  };

  const validateForm = () => {
    const newErrors = {};
    if (!country) newErrors.country = "Please select a country";
    if (!number) newErrors.number = "Please enter a number";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Selected Country:", country);
      console.log("Entered Number:", number);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className=" flex ">
      <select
        id="country"
        name="country"
        value={country}
        onChange={handleCountryChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="">Select a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="UK">United Kingdom</option>
        <option value="AU">Australia</option>
        {/* Add more countries as needed */}
      </select>
      {errors.country && (
        <p className="text-red-500 text-sm mt-1">{errors.country}</p>
      )}

      <input
        type="number"
        id="number"
        name="number"
        value={number}
        onChange={handleNumberChange}
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder="Enter a number"
      />
      {errors.number && (
        <p className="text-red-500 text-sm mt-1">{errors.number}</p>
      )}
    </div>
  );
};

export default CountryNumberForm;
