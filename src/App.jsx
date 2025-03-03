import React from "react";
import {
  FaTachometerAlt,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaBolt,
  FaBuilding,
  FaPlane,
  FaShieldAlt,
  FaChartLine,
  FaBook,
} from "react-icons/fa";

const AimraMoney = () => {
  return (
    <div className="min-h-screen">
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
        <div className="flex items-center space-x-2">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </div>

        <div className="relative group flex items-center space-x-2">
          <FaExchangeAlt />
          <span>Transfer Services</span>
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded">
            Dropdown Items
          </div>
        </div>

        <div className="relative group flex items-center space-x-2">
          <FaMoneyBillWave />
          <span>Withdrawal</span>
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded">
            Dropdown Items
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <FaBolt />
          <span>BBPS</span>
        </div>

        <div className="relative group flex items-center space-x-2">
          <FaBuilding />
          <span>Utility</span>
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded">
            Dropdown Items
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <FaBuilding />
          <span>CMS</span>
        </div>

        <div className="relative group flex items-center space-x-2">
          <FaPlane />
          <span>Travel</span>
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded">
            Dropdown Items
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <FaShieldAlt />
          <span>Insurance</span>
        </div>

        <div className="relative group flex items-center space-x-2">
          <FaChartLine />
          <span>Reports</span>
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded">
            Dropdown Items
          </div>
        </div>

        <div className="relative group flex items-center space-x-2">
          <FaBook />
          <span>Ledger</span>
          <div className="absolute hidden group-hover:block bg-white text-black mt-2 p-2 rounded">
            Dropdown Items
          </div>
        </div>
      </div>

      <div className="flex">
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
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
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

        {/* Recharge Options */}
        <div className="bg-white m-4 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Reliance JIO - UP West</h3>
          <div className="flex space-x-4 border-b pb-2 mb-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Top Up
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded">
              Full Talktime
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded">SMS</button>
            <button className="bg-gray-300 px-4 py-2 rounded">3G-4G</button>
            <button className="bg-gray-300 px-4 py-2 rounded">Roaming</button>
            <button className="bg-gray-300 px-4 py-2 rounded">Other</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-4 border rounded">
              7.47 - N.A. - Unlimited Talktime
            </div>
            <div className="p-4 border rounded">
              14.95 - N.A. - Unlimited Talktime
            </div>
            <div className="p-4 border rounded">
              39.37 - N.A. - Unlimited Talktime
            </div>
            <div className="p-4 border rounded">
              81.75 - N.A. - Unlimited Talktime
            </div>
            <div className="p-4 border rounded">
              844.46 - N.A. - Unlimited Talktime
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AimraMoney;
