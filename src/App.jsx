import React, { useState, useEffect } from "react";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import RechargeForm from "./components/RechargeForm";
import RecentTransactions from "./components/RecentTransactions";
import PlaceholderPlans from "./components/PlaceholderPlans";
import Plans from "./components/Plans";
import RechargeConfirmationModal from "./components/modal/RechargeConfirmModal";
import Footer from "./components/Footer";
import plansData from "./components/data/PlanData";
// Dynamic plans data organized by plan type

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
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [recentTransactions, setRecentTransactions] = useState([]);

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

    // Open confirmation modal instead of immediately processing
    setShowConfirmModal(true);
  };

  const handleRechargeSuccess = () => {
    const newTransaction = {
      mobileNumber: formValues.mobileNumber,
      amount: formValues.amount,
      operator: formValues.operator,
      circle: formValues.circle,
      date: new Date().toLocaleString(),
    };

    setRecentTransactions((prevTransactions) => {
      const updatedTransactions = [newTransaction, ...prevTransactions];
      console.log("Updated Transactions:", updatedTransactions); // Debug log
      return updatedTransactions;
    });
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
            setFormValues={setFormValues}
          />

          {/* Right panel - Plans */}
          <Plans
            showPlans={showPlans}
            formValues={formValues}
            planTypes={planTypes}
            handlePlanTypeChange={handlePlanTypeChange}
            currentPlans={currentPlans}
            handlePlanSelect={handlePlanSelect}
          />

          {/* Placeholder when plans are not shown */}
          <PlaceholderPlans showPlans={showPlans} />
        </div>

        {/* Recent Transactions Section */}
        <RecentTransactions transactions={recentTransactions} />
      </div>

      {/* Recharge Confirmation Modal */}
      <RechargeConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        formValues={formValues}
        setFormValues={setFormValues}
        handleRechargeSuccess={handleRechargeSuccess}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AimraMoney;
