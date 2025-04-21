import React, { useState } from "react";
import banner from "../assets/banner.png";
import Button from "./ui/Button";

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="py-12">
      <img src={banner} alt="" className="w-full mx-auto md:max-w-5xl" />
      <div className="space-y-4 text-center">
        <h1 className="text-7xl font-thin">Browse, Search, View, Buy</h1>
        <p className="text-xl text-gray-400">
          Best place to browse, search, view details and purchase of top
          flagship <br />
          phones of the current time - FlagshipFaceOff
        </p>
        <form
          onSubmit={(e) => handleSearch(e, searchText)}
          action=""
          className="flex flex-col md:flex-row justify-center items-center"
        >
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search By Name"
            className="border border-gray-300 rounded shadow-md bg-white w-2/3 h-12 px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0"
          />
          <Button text="Search" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Hero;
