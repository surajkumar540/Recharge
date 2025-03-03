import React from "react";

const TopBar = () => {
  // Dynamic data
  const walletBalance = "₹23,322";
  const aepsBalance = "₹0.00";
  const username = "Username";
  return (
    <div className="bg-black text-white flex justify-between items-center p-4">
      <div className="text-lg font-bold">Aimra Money</div>
      <div className="flex items-center space-x-4 text-sm md:text-base">
        <span>Wallet Balance: {walletBalance}</span>
        <span>Aeps Balance: {aepsBalance}</span>
        <span className="hidden md:inline">|</span>
        <span>{username}</span>
      </div>
    </div>
  );
};

export default TopBar;
