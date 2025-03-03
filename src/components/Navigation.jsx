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
const Navigation = () => {
  const navItems = [
    { icon: <FaTachometerAlt />, label: "Dashboard", hasDropdown: false },
    { icon: <FaExchangeAlt />, label: "Transfer Services", hasDropdown: true },
    { icon: <FaMoneyBillWave />, label: "Withdrawal", hasDropdown: true },
    { icon: <FaBolt />, label: "BBPS", hasDropdown: false },
    { icon: <FaBuilding />, label: "Utility", hasDropdown: true },
    { icon: <FaBuilding />, label: "CMS", hasDropdown: false },
    { icon: <FaPlane />, label: "Travel", hasDropdown: true },
    { icon: <FaShieldAlt />, label: "Insurance", hasDropdown: false },
    { icon: <FaChartLine />, label: "Reports", hasDropdown: true },
    { icon: <FaBook />, label: "Ledger", hasDropdown: true },
  ];
  return (
    <div className="text-white bg-black ">
      <div className="flex p-4 min-w-max">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="relative group flex items-center space-x-2 px-3 py-2 cursor-pointer hover:bg-gray-800 rounded transition-colors"
          >
            {item.icon}
            <span>{item.label}</span>
            {item.hasDropdown && (
              <div className=" absolute left-0 top-full hidden group-hover:block bg-white text-black mt-2 p-2 rounded shadow-lg min-w-max">
                <div className="p-2 hover:bg-gray-100">Option 1</div>
                <div className="p-2 hover:bg-gray-100">Option 2</div>
                <div className="p-2 hover:bg-gray-100">Option 3</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
