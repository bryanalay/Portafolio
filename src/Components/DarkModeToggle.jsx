import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;