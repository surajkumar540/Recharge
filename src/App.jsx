import React from "react";

const AimraMoney = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-black text-white flex justify-between items-center p-4">
        <div className="text-lg font-bold">Aimra Money</div>
        <div className="flex items-center space-x-4">
          <span>Wallet Balance: ₹23,322</span>
          <span>Aeps Balance: ₹0.00</span>
          <span>|</span>
          <span>Username</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="text-white bg-black flex justify-center space-x-6 p-4">
        <div>Dashboard</div>
        <div className="relative group">
          Transfer Services
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded">
            Dropdown Items
          </div>
        </div>
        <div className="relative group">
          Withdrawal
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded">
            Dropdown Items
          </div>
        </div>
        <div>BBPS</div>
        <div className="relative group">
          Utility
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded">
            Dropdown Items
          </div>
        </div>
        <div>CMS</div>
        <div className="relative group">
          Travel
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded">
            Dropdown Items
          </div>
        </div>
        <div>Insurance</div>
        <div className="relative group">
          Reports
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded">
            Dropdown Items
          </div>
        </div>
        <div className="relative group">
          Ledger
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded">
            Dropdown Items
          </div>
        </div>
      </div>

      {/* Recharge Section */}
      <div className="bg-white m-4 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Recharge</h2>
        <div className="flex space-x-4 mb-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Prepaid Recharge
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded">
            DTH Recharge
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded">Postpaid</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Mobile Number"
            className="border p-2 rounded"
          />
          <select className="border p-2 rounded">
            <option>Reliance JIO</option>
          </select>
          <select className="border p-2 rounded">
            <option>UP West</option>
          </select>
          <input
            type="text"
            placeholder="Amount"
            className="border p-2 rounded"
          />
        </div>
        <button className="bg-teal-600 text-white px-6 py-2 rounded mt-4">
          Recharge
        </button>
      </div>
    </div>
  );
};

export default AimraMoney;
