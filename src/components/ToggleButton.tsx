// ToggleButton.tsx
import React from "react";

interface ToggleButtonProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  isDarkMode,
  toggleDarkMode,
}) => (
  <button
    onClick={toggleDarkMode}
    className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
  >
    {isDarkMode ? "☀️" : "🌙"}
  </button>
);

export default ToggleButton;
