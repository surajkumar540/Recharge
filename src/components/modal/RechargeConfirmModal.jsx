import React, { useState } from "react";

const RechargeConfirmationModal = ({ isOpen, onClose, formValues }) => {
  const [mpin, setMpin] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleMpinChange = (e) => {
    // Only allow digits and limit to 4 characters
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setMpin(value);
  };

  const handleConfirm = () => {
    if (mpin.length !== 4) {
      alert("Please enter a valid 4-digit MPIN");
      return;
    }

    setIsProcessing(true);

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);

      // Close success popup after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        setMpin("");
      }, 3000);
    }, 1500);
  };

  // Prevent closing when clicking on modal content
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Success Popup */}
      {showSuccess && (
        <div className="bg-white rounded-lg p-6 shadow-xl z-50 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Recharge Successful!
          </h3>
          <p className="text-gray-600">
            Your recharge has been processed successfully.
          </p>
        </div>
      )}

      {/* Confirmation Modal */}
      {!showSuccess && (
        <div
          className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full"
          onClick={handleModalContentClick}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Confirm Your Recharge
          </h3>

          <div className="space-y-4 mb-6">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">
                Mobile Number
              </label>
              <div className="p-2 bg-gray-100 rounded border border-gray-200">
                {formValues.mobileNumber}
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Provider</label>
              <div className="p-2 bg-gray-100 rounded border border-gray-200">
                {formValues.operator} ({formValues.circle})
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Amount</label>
              <div className="p-2 bg-gray-100 rounded border border-gray-200">
                ₹{formValues.amount}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="mpin" className="text-sm text-gray-600 mb-1">
                Enter MPIN
              </label>
              <input
                type="password"
                id="mpin"
                value={mpin}
                onChange={handleMpinChange}
                placeholder="Enter 4-digit MPIN"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength={4}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
              disabled={isProcessing}
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center"
              disabled={isProcessing}
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
                  Processing...
                </>
              ) : (
                "Confirm"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RechargeConfirmationModal;
