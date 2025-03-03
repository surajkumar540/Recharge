import React from "react";

const Plans = ({
  showPlans,
  formValues,
  planTypes,
  handlePlanTypeChange,
  currentPlans,
  handlePlanSelect,
}) => {
  return (
    <>
      {showPlans && (
        <div className="bg-white rounded-xl shadow-md p-6 flex-1 ">
          <div className="flex items-center justify-between border-b pb-4 mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              {formValues.operator} Plans
            </h2>
            <span className="bg-teal-100 text-teal-800 py-1 px-3 rounded-full text-sm font-medium">
              {formValues.circle}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {planTypes.map((type) => (
              <button
                key={type.id}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  formValues.activePlanType === type.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => handlePlanTypeChange(type.id)}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-lg border border-gray-200 overflow-x-auto" >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Validity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200  ">
                {currentPlans.map((plan, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition duration-150 overflow-x-scroll"
                  >
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      ₹{plan.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                      {plan.validity}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {plan.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-150"
                        onClick={() => handlePlanSelect(plan)}
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {currentPlans.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">
                No plans available for the selected criteria.
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Plans;
