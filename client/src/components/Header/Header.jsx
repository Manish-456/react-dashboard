import React from "react";
import {BellIcon, ChipIcon, InboxIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/outline';
const Header = () => {
  return (
    <div className="bg-[#fcfcfc] w-full sticky top-[0] left-0  py-6 px-12 flex justify-between items-center">
      <div className="hidden lg:flex  justify-start items-center gap-2 w-full py-2 space-x-4 px-1  ">
      
    <SearchIcon className="h-4 w-4"/>
        <input
          type="text"
          placeholder="search..."
          className="bg-transparent border-none outline-none"
        />
      </div>
      <div className="center w-full space-x-4 flex items-center justify-start md:justify-center">
      <ChipIcon className="h-6 w-6"/>
        <h1 className="text-xl text-gray-900 font-medium">DevDash</h1>
      </div>
      <div className="right gap-4 flex justify-end items-center w-full">
      <BellIcon  className="header-icon"/>
      <InboxIcon  className="header-icon"/>
      <UserCircleIcon  className="header-icon"/>

      </div>
    </div>
  );
};

export default Header;
