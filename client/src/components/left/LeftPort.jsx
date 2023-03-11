
import React from "react";
import InvestmentItem from "./InvestmentItem";

const LeftPort = () => {
  return (
    <div className="col-span-2 min-h-[90vh] border-r-2 border-gray-200 items-start justify-start flex flex-col w-full">
      {/* top */}
      <div className="w-full items-start justify-start flex flex-col pr-0 pl-12 lg:px-12 pt-12 pb-6">
        <h1 className="font-bold xl:text-2xl text-xl pb-2">My Cards</h1>
        <p className="text-md text-gray-800">
          Find all of your investments information on a card
        </p>
        <div className="items-start justify-start flex flex-col px-6 pt-8 pb-4 rounded-sm  bg-[#00d462b0] w-full mt-6 ">
          <h1 className="lg:text-xl text-sm">Manish Tamang</h1>
          <h1 className="text-3xl xl:text-3xl font-semibold py-4">$1,47,189</h1>
        </div>
        <div className="bg-black py-4 px-8 w-full start justify-between flex shadow-md  shadow-emerald-300">
          <span className="flex flex-col justify-start items-start text-white">
            <h1 className="lg:text-lg text-sm">Card Numbers</h1>
            <h3 className="lg:text-lg text-sm">**** **** **** 1234</h3>
          </span>
          <span className="flex flex-col justify-start items-start text-white">
            <h1 className="lg:text-lg text-sm">CVC</h1>
            <h3 className="lg:text-lg text-sm">123</h3>
          </span>
        </div>
        <div className="w-full items-start justify-start flex flex-col  py-6">
          <h1 className="font-bold text-xl xl:text-2xl pb-2">
            Recent Investments
          </h1>
          <div className="w-full space-y-5 overflow-y-auto max-h-[350px] py-2 ">
            <InvestmentItem />
          </div>
        </div>
      </div>
      {/* bottom */}
    </div>
  );
};

export default LeftPort;
