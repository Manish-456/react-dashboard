import React from "react";
import {
  GiftIcon,
  HomeIcon,
  PencilIcon,
  TicketIcon,
} from "@heroicons/react/outline";

const InvestmentItem = () => {
  return (
   <div className="w-full flex gap-4 flex-col">
     <div className="w-full p-2 flex items-center justify-between">
      {/* icon + text */}
      <div className="flex items-center justify-center space-x-4 w-full">
        <div className="bg-[#f7f7f4] rounded-2xl shadow-xl p-3 ">
          <TicketIcon className="invest-icon" />
        </div>
        <div className="w-full space-y-1">
            <h1 className="font-bold">Gadget </h1>
            <p>Apple California </p>
        </div>
      </div>
      {/* price + text */}

        <div className="flex flex-col items-end justify-end">
            <h1 className="font-bold">$980</h1>
            <p className="text-red-500">20%</p>
        </div>
      </div>
     <div className="w-full p-2 flex items-center justify-between">
      {/* icon + text */}
      <div className="flex items-center justify-center space-x-4 w-full">
        <div className="bg-[#f7f7f4] rounded-2xl shadow-xl p-3 ">
          <HomeIcon className="invest-icon" />
        </div>
        <div className="w-full space-y-1">
            <h1 className="font-bold">House </h1>
            <p>ManuLife inc. </p>
        </div>
      </div>
      {/* price + text */}

        <div className="flex flex-col items-end justify-end">
            <h1 className="font-bold">$980</h1>
            <p className="text-green-500">1.09%</p>
        </div>
      </div>
     <div className="w-full p-2 flex items-center justify-between">
      {/* icon + text */}
      <div className="flex items-center justify-center space-x-4 w-full">
        <div className="bg-[#f7f7f4] rounded-2xl shadow-xl p-3 ">
          <PencilIcon className="invest-icon" />
        </div>
        <div className="w-full space-y-1">
            <h1 className="font-bold">Education </h1>
            <p>Interaction Design </p>
        </div>
      </div>
      {/* price + text */}

        <div className="flex flex-col items-end justify-end">
            <h1 className="font-bold">$1059</h1>
            <p className="text-red-500">2.80%</p>
        </div>
      </div>
     <div className="w-full p-2 flex items-center justify-between">
      {/* icon + text */}
      <div className="flex items-center justify-center space-x-4 w-full">
        <div className="bg-[#f7f7f4] rounded-2xl shadow-xl p-3 ">
          <GiftIcon className="invest-icon" />
        </div>
        <div className="w-full space-y-1">
            <h1 className="font-bold">Food </h1>
            <p>Apple California </p>
        </div>
      </div>
      {/* price + text */}

        <div className="flex flex-col items-end justify-end">
            <h1 className="font-bold">$980</h1>
            <p className="text-green-500">20%</p>
        </div>
      </div>
   </div>
   
  );
};

export default InvestmentItem;
