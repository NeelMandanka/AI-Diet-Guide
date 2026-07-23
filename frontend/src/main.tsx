import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import App from "./App";
import { queryClient } from "@/lib/query-client";

import "@/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={16}
        containerStyle={{
          top: 24,
          right: 24,
        }}
        toastOptions={{
          duration: 3500,
          style: {
            background: "#FFFFFF",
            color: "#0F172A",
            border: "1px solid #E2E8F0",
            borderRadius: "18px",
            padding: "16px 18px",
            minWidth: "320px",
            maxWidth: "420px",
            boxShadow: "0 20px 50px rgba(15,23,42,0.10)",
            fontSize: "14px",
            fontWeight: "500",
          },
          success: {
            iconTheme: {
              primary: "#10B981",
              secondary: "#FFFFFF",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "#FFFFFF",
            },
          },
          loading: {
            iconTheme: {
              primary: "#10B981",
              secondary: "#FFFFFF",
            },
          },
        }}
      />
    </QueryClientProvider>
  </React.StrictMode>
);