import React from "react";

import {
  CogIcon,
  LogoutIcon,
  NewspaperIcon,
  ShoppingCartIcon,
  TemplateIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <nav className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px]  xl:w-[250px]  flex flex-col items-start pt-8 px-1 justify-between">
      <div className="space-y-8 sticky top-[70px] left-0 w-full">
        <div className="flex items-center w-full justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ">
          <TemplateIcon className="header-icon" />
          <h1 className="text-gray-600 group-hover:text-black xl:flex hidden text-[16px]">
            Dashboard
          </h1>
        </div>
        <div className="flex items-center w-full justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ">
          <ShoppingCartIcon className="header-icon" />
          <h1 className="text-gray-600 group-hover:text-black xl:flex hidden text-[16px]">
            Market
          </h1>
        </div>
        <div className="flex items-center w-full justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ">
          <UserIcon className="header-icon" />
          <h1 className="text-gray-600 group-hover:text-black xl:flex hidden text-[16px]">
            Portfolio
          </h1>
        </div>
        <div className="flex items-center w-full justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ">
          <NewspaperIcon className="header-icon" />
          <h1 className="text-gray-600 group-hover:text-black xl:flex hidden text-[16px]">
            News
          </h1>
        </div>
        <hr className="" />
        <div className="flex items-center w-full justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ">
          <CogIcon className="header-icon" />
          <h1 className="text-gray-600 group-hover:text-black xl:flex hidden text-[16px]">
            Setting
          </h1>
        </div>
        <div className="flex items-center w-full justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ">
          <LogoutIcon className="header-icon" />
          <h1 className="text-gray-600 group-hover:text-black xl:flex hidden text-[16px]">
            Logout
          </h1>
        </div>
        <hr />
      </div>
      <div className="xl:flex hidden flex-col items-center justify-center space-y-4 p-4 ">
        <h1 className="text-xl w-full font-medium text-gray-700">Grow Your <br /> Saving Now !</h1>
        <p className="text-sm text-gray-600">Pick an investment strategy that reflects your goals.</p>
        <button className="text-white w-full">Become a pro</button>

      </div>
    </nav>
  );
};

export default Navbar;
