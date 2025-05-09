import { useCallback, useEffect } from "react";
import { useAlert } from "../contexts/AlertContext";

const Alert = () => {
  const { alertState, setAlertState } = useAlert();
  const isSuccess = alertState.status === "success";
  const bgColor = isSuccess ? "bg-green-100" : "bg-red-100";
  const borderColor = isSuccess ? "border-green-500" : "border-red-500";
  const textColor = isSuccess ? "text-green-700" : "text-red-700";
  const iconColor = isSuccess ? "text-green-500" : "text-red-500";
  const handleClose = useCallback(() => {
    setAlertState({
      ...alertState,
      show: false,
    });
  }, [alertState, setAlertState]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [handleClose]);
  return alertState.show ? (
    <div
      className={`fixed bottom-5 right-5 p-2 min-w-[500px] rounded-md shadow-lg border ${bgColor} ${borderColor}`}
    >
      <div className="flex items-start selection:bg-[var(--theme-color)]">
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full bg-white ${iconColor}`}
        >
          {isSuccess ? (
            <svg
              xmlns="https://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="https://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <div className="ml-3 flex flex-col">
          <h5 className={`text-lg font-semibold ${textColor}`}>
            {alertState.msg}
          </h5>
          <p className={`text-sm ${textColor}`}>{alertState.description}</p>
        </div>
      </div>
      <span
        className="absolute top-2 right-2 cursor-pointer"
        onClick={handleClose}
      >
        <svg
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  ) : null;
};

export default Alert;
