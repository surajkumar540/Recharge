import React, { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import RechargeForm from "./components/RechargeForm";
import RecentTransactions from "./components/RecentTransactions";
import PlaceholderPlans from "./components/PlaceholderPlans";

// Dynamic plans data organized by plan type
const plansData = {
  topup: [
    { amount: 50, validity: "NA", description: "₹50 Talktime" },
    { amount: 100, validity: "NA", description: "₹100 Talktime" },
    { amount: 150, validity: "NA", description: "₹150 Talktime" },
  ],
  fulltalktime: [
    {
      amount: 200,
      validity: "28 days",
      description: "Unlimited calls + 1GB/day",
    },
    {
      amount: 300,
      validity: "56 days",
      description: "Unlimited calls + 2GB/day",
    },
    {
      amount: 499,
      validity: "84 days",
      description: "Unlimited calls + 1.5GB/day + 100SMS/day",
    },
  ],
  sms: [
    { amount: 30, validity: "7 days", description: "100 SMS/day" },
    { amount: 60, validity: "14 days", description: "200 SMS/day" },
    { amount: 90, validity: "28 days", description: "100 SMS/day + 1GB data" },
  ],
  data: [
    { amount: 50, validity: "1 day", description: "1GB 4G Data" },
    { amount: 150, validity: "7 days", description: "3GB 4G Data" },
    { amount: 249, validity: "28 days", description: "1.5GB/day 4G Data" },
  ],
  roaming: [
    { amount: 39, validity: "1 day", description: "Free Roaming Calls" },
    { amount: 149, validity: "7 days", description: "Free Roaming + 1GB Data" },
  ],
  other: [
    {
      amount: 399,
      validity: "28 days",
      description: "Netflix + Amazon Prime Access + 2GB/day",
    },
    {
      amount: 599,
      validity: "56 days",
      description: "All OTT Platforms + 2.5GB/day",
    },
  ],
};

const AimraMoney = () => {
  // State management
  const [formValues, setFormValues] = useState({
    activeTab: "prepaid",
    mobileNumber: "",
    operator: "Reliance JIO",
    circle: "UP West",
    amount: "",
    activePlanType: "topup",
  });

  // Loading and data states
  const [isLoading, setIsLoading] = useState(false);
  const [showPlans, setShowPlans] = useState(false);
  const [currentPlans, setCurrentPlans] = useState([]);

  // Load plans when plan type changes
  useEffect(() => {
    // Get plans based on the active plan type
    const plans = plansData[formValues.activePlanType] || [
      { amount: "7.47", validity: "N.A.", description: "Unlimited Talktime" },
      { amount: "14.95", validity: "N.A.", description: "Unlimited Talktime" },
      { amount: "39.37", validity: "N.A.", description: "Unlimited Talktime" },
    ];

    setCurrentPlans(plans);
  }, [formValues.activePlanType, formValues.operator, formValues.circle]);

  const planTypes = [
    { id: "topup", label: "Top Up" },
    { id: "fulltalktime", label: "Full Talktime" },
    { id: "sms", label: "SMS" },
    { id: "data", label: "3G-4G" },
    { id: "roaming", label: "Roaming" },
    { id: "other", label: "Other" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    // For mobile number, only allow digits
    if (name === "mobileNumber" && !/^\d*$/.test(value)) {
      return;
    }
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleTabChange = (tab) => {
    setFormValues((prev) => ({ ...prev, activeTab: tab }));
    setShowPlans(false);
  };

  const handlePlanTypeChange = (type) => {
    setFormValues((prev) => ({ ...prev, activePlanType: type }));
  };

  const handlePlanSelect = (plan) => {
    setFormValues((prev) => ({ ...prev, amount: plan.amount }));
  };

  const handleViewPlans = () => {
    const { mobileNumber } = formValues;
    if (!mobileNumber || mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowPlans(true);
    }, 800);
  };

  const handleRecharge = () => {
    const { mobileNumber, amount } = formValues;
    if (!mobileNumber || mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    if (!amount) {
      alert("Please enter an amount");
      return;
    }

    setIsLoading(true);

    // Simulate processing
    setTimeout(() => {
      setIsLoading(false);
      alert(
        `Recharge of ₹${amount} for ${mobileNumber} initiated successfully!`
      );
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navigation />

      {/* Main content */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Recharge Services
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left panel - Recharge form */}
          <RechargeForm
            handleChange={handleChange}
            formValues={formValues}
            handleTabChange={handleTabChange}
            isLoading={isLoading}
            handleViewPlans={handleViewPlans}
            handleRecharge={handleRecharge}
          />

          {/* Right panel - Plans */}
          {showPlans && (
            <div className="bg-white rounded-xl shadow-md p-6 flex-1">
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

              <div className="overflow-hidden rounded-lg border border-gray-200">
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
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentPlans.map((plan, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition duration-150"
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

          {/* Placeholder when plans are not shown */}
          <PlaceholderPlans showPlans={showPlans} />
        </div>

        {/* Recent Transactions Section */}
        <RecentTransactions />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Aimra Money</h3>
              <p className="text-gray-400">
                Your trusted partner for all digital payment solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: support@aimramoney.com</p>
              <p className="text-gray-400">Phone: +91 1234567890</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Aimra Money. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AimraMoney;
