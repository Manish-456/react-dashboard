import React from 'react'
import {
    GiftIcon,
    HomeIcon,
    PencilIcon,
    TicketIcon,
  } from "@heroicons/react/outline";

const PortfolioItem = () => {
  return (
    <div className='w-full p-2 lg:flex-row flex-col  gap-4 items-center justify-center flex bg-white shadow-2xl shadow-gray-200'>
     
     <div className="flex  items-center justify-center space-x-4 w-full">
        <div className="bg-[#f7f7f4] rounded-2xl shadow-xl p-3 ">
          <TicketIcon className="invest-icon" />
        </div>
        <div className="w-full space-y-1">
            <h1 className="font-bold">Gadget </h1>
            <p className="text-sm">Apple California </p>
        </div>
      {/* price + text */}

     
      </div>
     <div className="w-full p-2 flex items-center justify-between">
      {/* icon + text */}
      <div className="flex items-center justify-center space-x-4 w-full">
        <div className="bg-[#f7f7f4] rounded-2xl shadow-xl p-3 ">
          <HomeIcon className="invest-icon" />
        </div>
        <div className="w-full space-y-1">
            <h1 className="font-bold">House </h1>
            <p className="text-sm">ManuLife inc. </p>
        </div>
      </div>
      {/* price + text */}

    
      </div>
     <div className="w-full p-2 flex items-center justify-between">
      {/* icon + text */}
      <div className="flex items-center justify-center space-x-4 w-full">
        <div className="bg-[#f7f7f4] rounded-2xl shadow-xl p-3 ">
          <PencilIcon className="invest-icon" />
        </div>
        <div className="w-full space-y-1">
            <h1 className="font-bold">Education </h1>
            <p className="text-sm">Interaction Design </p>
        </div>
      </div>
      {/* price + text */}

      </div>
     <div className="w-full p-2 flex items-center justify-between">
      {/* icon + text */}
      <div className="flex items-center justify-center space-x-4 w-full">
        <div className="bg-[#f7f7f4] rounded-2xl shadow-xl p-3 ">
          <GiftIcon className="invest-icon" />
        </div>
        <div className="w-full space-y-1">
            <h1 className="font-bold">Food </h1>
            <p className="text-sm">Apple California </p>
        </div>
      </div>
      {/* price + text */}

  
    
    </div>
      </div>
  )
}

export default PortfolioItem
