import { CashIcon, CreditCardIcon } from "@heroicons/react/outline";
import React from "react";
import Chart from './Chart'
import PortfolioItem from "./PortfolioItem";
const RightPort = () => {
  return (
    <div className="col-span-3 items-start justify-start flex flex-col w-full pt-12 px-4 pb-6">
      {/* top-section */}
      <div className="md:flex items-center justify-center lg:space-x-4 w-full lg:space-y-0 space-y-4">
        <div className="w-full gap-6 items-center justify-center flex flex-col">
          <span
           className="shadow-lg shadow-gray-300 items-center justify-center flex p-4 rounded-full "
          ><CashIcon className="w-8 h-8 stroke-1" />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2>On Time</h2>
            <h2 className="font-bold text-xl">$ 120.55</h2>
          </span>
        </div>
        <div className="w-full gap-6 items-center justify-center flex flex-col">
          <span
           className="shadow-lg shadow-gray-300 items-center justify-center flex p-4 rounded-full "
          ><CreditCardIcon className="w-8 h-8 stroke-1" />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2>Round-ups</h2>
            <h2 className="font-bold text-xl">$ 200.13</h2>
          </span>
        </div>
        <div className="bg-[#a1f1c6b0]  pt-6 items-center justify-center flex flex-col w-full">
          <span className="flex items-center justify-center w-full py-6 flex-col">
            <h3>Total Amount</h3>
            <h1 className="text-xl font-semibold">$211,478,33</h1>
          </span>
          <div className="bg-black items-center flex justify-center text-white w-full py-3">
             <h1 className="text-sm">Withdraw Earnings</h1>
          </div>
        </div>
      </div>
      {/* chart */}
      <div className="border-t border-gray-200 w-full my-4"/>
      <div className="w-full items-start justify-start flex flex-col px-12 py-2">
        <h1 className="text-xl font-bold xl:text-2xl">Potentials</h1>
       <Chart />
      </div>
      {/* bottom -section */}
      <div className="w-full items-start justify-start flex flex-col px-12 py-16">
      <h1 className="text-xl font-bold xl:text-3xl py-4">My Portfolio</h1>
      <div className="flex items-center justify-center space-x-4 overflow-x-auto w-full py-4">
          <PortfolioItem />
      </div>
      </div>
    </div>
  );
};

export default RightPort;
