import React from "react";

const RechargeForm = ({
  handleChange,
  formValues,
  handleTabChange,
  isLoading,
  handleRecharge,
  handleViewPlans,
}) => {
  const rechargeTabs = [
    { id: "prepaid", label: "Prepaid Recharge" },
    { id: "dth", label: "DTH Recharge" },
    { id: "postpaid", label: "Postpaid" },
  ];
  const operators = ["Reliance JIO", "Airtel", "Vodafone Idea", "BSNL"];
  const circles = [
    "UP West",
    "Delhi NCR",
    "Maharashtra",
    "Karnataka",
    "Tamil Nadu",
    "Gujarat",
    "Rajasthan",
    "Punjab",
    "Haryana",
    "West Bengal",
  ];
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex-[0.5]">
      <div className="flex flex-wrap gap-2 mb-6 border-b pb-4">
        {rechargeTabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
              formValues.activeTab === tab.id
                ? "bg-teal-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile-input"
            maxLength="10"
            name="mobileNumber"
            placeholder="Enter 10 digit mobile number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
            value={formValues.mobileNumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Operator
          </label>
          <select
            name="operator"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
            value={formValues.operator}
            onChange={handleChange}
          >
            {operators.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Circle
          </label>
          <select
            name="circle"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
            value={formValues.circle}
            onChange={handleChange}
          >
            {circles.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            className={` bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-medium transition duration-200 flex justify-center items-center ${
              isLoading ? "opacity-75 cursor-not-allowed" : ""
            }`}
            onClick={handleViewPlans}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </span>
            ) : (
              "Browse Plans"
            )}
          </button>
        </div>

        <div className="border-t border-gray-200 pt-4 mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount (₹)
          </label>
          <input
            type="number"
            id="amount-input"
            name="amount"
            placeholder="Enter recharge amount"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
            value={formValues.amount}
            // onChange={handleChange}
          />
        </div>
      </div>

      <button
        className={`w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition duration-200 flex justify-center items-center ${
          isLoading ? "opacity-75 cursor-not-allowed" : ""
        }`}
        onClick={handleRecharge}
        disabled={isLoading}
      >
        Recharge Now
      </button>
    </div>
  );
};

export default RechargeForm;
