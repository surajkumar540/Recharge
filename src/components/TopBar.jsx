import React from "react";
import { BiBell, BiUser, BiWallet, BiMenu } from "react-icons/bi";

const TopBar = () => {
  // Dynamic data
  const walletBalance = "₹23,322";
  const aepsBalance = "₹0.00";
  const username = "Username";

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white shadow-md">
      <div className="max-w-7xl mx-auto">
        {/* Main navbar content */}
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
              Aimra Money
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <BiWallet size={16} className="text-blue-400" />
              <span className="text-sm text-gray-300">
                Wallet:{" "}
                <span className="font-semibold text-white">
                  {walletBalance}
                </span>
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <BiWallet size={16} className="text-green-400" />
              <span className="text-sm text-gray-300">
                AEPS:{" "}
                <span className="font-semibold text-white">{aepsBalance}</span>
              </span>
            </div>
            <div className="h-6 border-l border-gray-600" />
            <div className="flex items-center space-x-2">
              <BiUser size={16} />
              <span className="font-medium">{username}</span>
            </div>
            <BiBell
              size={18}
              className="text-gray-300 hover:text-white cursor-pointer"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white"
            >
              <BiMenu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 p-4 space-y-3 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <BiWallet size={16} className="text-blue-400" />
              <span className="text-sm">
                Wallet Balance:{" "}
                <span className="font-semibold">{walletBalance}</span>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <BiWallet size={16} className="text-green-400" />
              <span className="text-sm">
                AEPS Balance:{" "}
                <span className="font-semibold">{aepsBalance}</span>
              </span>
            </div>
            <div className="flex items-center space-x-2 pt-1 border-t border-gray-700">
              <BiUser size={16} />
              <span className="font-medium">{username}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
