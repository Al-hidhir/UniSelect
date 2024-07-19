import React, { useState } from "react";
import "./universitySearch.css";

const UniversitySearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="search">
      <h1>Let's Go</h1>
      <p>Let's Start Your University</p>
      <h3>Journey</h3>

      <div className="searchButton">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a Course or University....."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default UniversitySearch;
