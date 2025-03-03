import React, { useState } from "react";
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
  FaBars,
  FaChevronDown,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { icon: <FaTachometerAlt />, label: "Dashboard", hasDropdown: false },
    {
      icon: <FaExchangeAlt />,
      label: "Transfer Services",
      hasDropdown: true,
      dropdownItems: [
        "Money Transfer",
        "UPI Transfer",
        "Bank Transfer",
        "Wallet Transfer",
      ],
    },
    {
      icon: <FaMoneyBillWave />,
      label: "Withdrawal",
      hasDropdown: true,
      dropdownItems: ["Cash Withdrawal", "Bank Withdrawal", "Agent Withdrawal"],
    },
    { icon: <FaBolt />, label: "BBPS", hasDropdown: false },
    {
      icon: <FaBuilding />,
      label: "Utility",
      hasDropdown: true,
      dropdownItems: ["Recharge", "Bill Payment"],
    },
    { icon: <FaBuilding />, label: "CMS", hasDropdown: false },
    {
      icon: <FaPlane />,
      label: "Travel",
      hasDropdown: true,
      dropdownItems: [
        "Flight Booking",
        "Bus Booking",
        "Hotel Booking",
        "Train Booking",
      ],
    },
    { icon: <FaShieldAlt />, label: "Insurance", hasDropdown: false },
    {
      icon: <FaChartLine />,
      label: "Reports",
      hasDropdown: true,
      dropdownItems: [
        "Transaction Reports",
        "User Reports",
        "Settlement Reports",
      ],
    },
    {
      icon: <FaBook />,
      label: "Ledger",
      hasDropdown: true,
      dropdownItems: ["Daily Ledger", "Monthly Summary", "Annual Statement"],
    },
  ];

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <div className="text-white bg-gray-900 relative">
      {/* Mobile menu button */}
      <div className="md:hidden flex justify-between items-center p-4 border-b border-gray-800">
        <span className="text-lg font-medium">Menu</span>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-2"
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:block">
        <div className="flex flex-wrap justify-center border-b border-gray-800">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <div
                className="flex items-center space-x-2 px-4 py-3 cursor-pointer hover:bg-gray-800 transition-colors"
                onClick={() => item.hasDropdown && toggleDropdown(index)}
              >
                <span className="text-gray-400">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
                {item.hasDropdown && (
                  <FaChevronDown className="text-xs text-gray-500" />
                )}
              </div>

              {/* Desktop dropdown */}
              {item.hasDropdown && (
                <div className="absolute left-0 top-full hidden group-hover:block bg-gray-800 text-white mt-0 shadow-lg min-w-max z-10">
                  {item.dropdownItems.map((dropItem, idx) => (
                    <div
                      key={idx}
                      className="p-3 text-sm hover:bg-gray-700 border-b border-gray-700 whitespace-nowrap"
                    >
                      {dropItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-gray-900">
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-gray-800">
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-800"
                onClick={() => item.hasDropdown && toggleDropdown(index)}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.hasDropdown && (
                  <span className="text-gray-500">
                    {activeDropdown === index ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </span>
                )}
              </div>

              {/* Mobile dropdown */}
              {item.hasDropdown && activeDropdown === index && (
                <div className="bg-gray-800 px-4 pb-2">
                  {item.dropdownItems.map((dropItem, idx) => (
                    <div
                      key={idx}
                      className="py-3 pl-8 text-sm text-gray-300 border-b border-gray-700"
                    >
                      {dropItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
