import React from "react";
import search from '../assets/search.svg'

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 bg-[#F3F3F4] p-2 rounded-md w-full md:w-1/2 focus:outline-none h-10 focus:ring-2 focus:ring-blue-500"
      />
      <img src={search} alt="search" className="absolute"/>
    </>
  );
};

export default SearchBox;
