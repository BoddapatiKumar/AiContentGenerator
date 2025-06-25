import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div
      className="p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-700 
    flex flex-col justify-center items-center text-white"
    >
      <h2 className="text-3xl font-bold">Browse all templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]">
          <Search className="text-violet-700" />
          <input
            type="text"
            placeholder="search.."
            className="text-black w-full outline-none"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
