"use client";

import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Fungsi reusable untuk memanggil toast
export const showToast = (
  message: string,
  type: "success" | "error" | "info" | "warning" = "info",
  options?: ToastOptions
) => {
  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "warning":
      toast.warning(message, options);
      break;
    case "info":
    default:
      toast.info(message, options);
      break;
  }
};

// Component ToastContainer untuk diletakkan di root layout atau App
export const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};
