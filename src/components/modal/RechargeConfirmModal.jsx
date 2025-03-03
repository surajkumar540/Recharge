import React, { useState, useEffect } from "react";
import {
  FaCheckCircle,
  FaTimes,
  FaExclamationCircle,
  FaLock,
  FaCreditCard,
} from "react-icons/fa";

const RechargeConfirmationModal = ({
  isOpen,
  onClose,
  formValues,
  setFormValues,
  handleRechargeSuccess,
  setShowPlans,
}) => {
  const [mpin, setMpin] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(3);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setMpin("");
      setError("");
      setShowSuccess(false);
      setIsProcessing(false);
    }
  }, [isOpen]);

  // Countdown timer for success message
  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showSuccess]);

  // Auto close after countdown reaches zero
  useEffect(() => {
    if (timeLeft === 0 && showSuccess) {
      handleCloseAfterSuccess();
    }
  }, [timeLeft, showSuccess]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && !isProcessing && !showSuccess) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isProcessing, onClose, showSuccess]);

  const handleMpinChange = (e) => {
    setError("");
    // Only allow digits and limit to 4 characters
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setMpin(value);
  };

  const handleConfirm = () => {
    if (mpin.length !== 4) {
      setError("Please enter a valid 4-digit MPIN");
      return;
    }

    setIsProcessing(true);
    setError("");

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      handleRechargeSuccess();
      setTimeLeft(3);
    }, 1500);
  };

  const handleCloseAfterSuccess = () => {
    setShowSuccess(false);
    onClose();
    setMpin("");
    setFormValues({
      activeTab: "prepaid",
      mobileNumber: "",
      operator: "Reliance JIO",
      circle: "UP West",
      amount: "",
    });
    setShowPlans(false);
  };

  // Prevent closing when clicking on modal content
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  // Format mobile number with spaces
  const formatMobileNumber = (number) => {
    if (!number) return "";
    return number.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={!isProcessing && !showSuccess ? onClose : undefined}
    >
      {/* Success Popup */}
      {showSuccess && (
        <div className="bg-white rounded-lg p-8 shadow-2xl z-50 text-center max-w-md w-full animate-fadeIn">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <FaCheckCircle size={40} className="text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Recharge Successful!
          </h3>
          <p className="text-gray-600 mb-6">
            Your recharge of ₹{formValues.amount} for{" "}
            {formatMobileNumber(formValues.mobileNumber)} has been processed
            successfully.
          </p>
          <div className="text-sm text-gray-500">
            Closing in {timeLeft} second{timeLeft !== 1 ? "s" : ""}...
          </div>
          <button
            onClick={handleCloseAfterSuccess}
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Close Now
          </button>
        </div>
      )}

      {/* Confirmation Modal */}
      {!showSuccess && (
        <div
          className="bg-white rounded-lg shadow-2xl max-w-md w-full relative overflow-hidden"
          onClick={handleModalContentClick}
        >
          {/* Header with blue accent */}
          <div className="bg-blue-600 p-4 text-white">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Confirm Your Recharge</h3>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors"
                disabled={isProcessing}
              >
                <FaTimes size={20} />
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-5 mb-6">
              <div className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-600">Mobile Number</span>
                <span className="font-medium">
                  {formatMobileNumber(formValues.mobileNumber)}
                </span>
              </div>

              <div className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-600">Provider</span>
                <span className="font-medium">{formValues.operator}</span>
              </div>

              <div className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-600">Circle</span>
                <span className="font-medium">{formValues.circle}</span>
              </div>

              <div className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-600">Amount</span>
                <span className="font-medium text-lg">
                  ₹{formValues.amount}
                </span>
              </div>

              <div className="pt-2">
                <label
                  htmlFor="mpin"
                  className="text-sm text-gray-600 font-medium flex items-center gap-1 mb-2"
                >
                  <FaLock size={14} /> Enter MPIN for Transaction
                </label>
                <input
                  type="password"
                  id="mpin"
                  value={mpin}
                  onChange={handleMpinChange}
                  placeholder="Enter 4-digit MPIN"
                  className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  maxLength={4}
                  disabled={isProcessing}
                  autoFocus
                />
                {error && (
                  <div className="mt-2 text-red-600 text-sm flex items-center gap-1">
                    <FaExclamationCircle size={14} />
                    {error}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-medium"
                disabled={isProcessing}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center min-w-24 font-medium"
                disabled={isProcessing || mpin.length !== 4}
              >
                {isProcessing ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                    Processing
                  </>
                ) : (
                  <>
                    <FaCreditCard className="mr-2" /> Confirm Payment
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 text-xs text-gray-500 flex items-center justify-center">
              <FaLock size={12} className="mr-1" /> Secured by 256-bit
              encryption
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RechargeConfirmationModal;
