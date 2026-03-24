import React, { useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "./context/LanguageContext";
import { LoadingScreen } from "./components/LoadingScreen";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}