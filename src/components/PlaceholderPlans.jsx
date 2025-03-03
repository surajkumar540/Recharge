import React from "react";

const PlaceholderPlans = ({ showPlans }) => {
  return (
    <>
      {!showPlans && (
        <div className="bg-white rounded-xl shadow-md p-6 flex-1 flex flex-col items-center justify-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-300 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <h3 className="text-lg font-medium text-gray-700 mb-2">
            Browse Available Plans
          </h3>
          <p className="text-gray-500 max-w-md">
            Enter your mobile number, select operator and circle, then click
            "Browse Plans" to view available recharge options.
          </p>
        </div>
      )}
    </>
  );
};

export default PlaceholderPlans;
