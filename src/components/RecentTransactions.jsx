import React from "react";

const RecentTransactions = () => {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Recent Transactions
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                2025-03-02
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                Mobile Recharge
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                9876543210
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                ₹199
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Success
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                2025-03-01
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                DTH Recharge
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                12345678
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                ₹399
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Success
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                2025-02-28
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                Mobile Recharge
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                8765432109
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                ₹299
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  Failed
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
