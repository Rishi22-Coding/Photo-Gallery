import React from "react";

const NavBar = ({children}) => {
  return (
    <div className="bg-gray-800 flex items-center py-10">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-white text-center text-5xl font-bold mb-9">
          Search Images
        </h1>
        {children}
      </div>
    </div>
  );
};

export default NavBar;
