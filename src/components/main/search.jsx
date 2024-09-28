"use client";
import React, { useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([
    "Gandhinagar",
    "Kudasan",
    "Sargasan",
    "Sector 7",
    "Kalol",
    "Sector 6",
    "Chiloda",
    "Sector 22",
    "Sector 12",
    "Raysan",
  ]);
  const [categorySuggestions] = useState([
    "Dentist",
    "Gynecologist/Obstetrician",
    "General Physician",
    "Dermatologist",
    "Ear-nose-throat Specialist",
    "Homoeopath",
    "Ayurveda",
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform the search operation
    console.log("Searching for:", query, "in", location);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-6">
      <div className="flex justify-between items-center space-x-2">
        {/* Location Search */}
        <div className="relative w-1/3">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your city"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {location && (
            <ul className="absolute bg-white shadow-lg border w-full mt-1 max-h-60 overflow-y-auto rounded-md z-10">
              <li
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setLocation("Use my location")}
              >
                Use my location
              </li>
              {locationSuggestions
                .filter((item) =>
                  item.toLowerCase().includes(location.toLowerCase())
                )
                .map((item, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setLocation(item)}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          )}
        </div>

        {/* Search Input */}
        <div className="relative w-2/3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search doctors, clinics, hospitals, etc."
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {query && (
            <ul className="absolute bg-white shadow-lg border w-full mt-1 max-h-60 overflow-y-auto rounded-md z-10">
              {categorySuggestions
                .filter((item) =>
                  item.toLowerCase().includes(query.toLowerCase())
                )
                .map((item, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-100 cursor-pointer flex justify-between"
                  >
                    <span>{item}</span>
                    <span className="text-gray-400 text-sm">SPECIALITY</span>
                  </li>
                ))}
            </ul>
          )}
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
