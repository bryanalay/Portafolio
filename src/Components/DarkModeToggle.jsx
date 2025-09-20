import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-platinum-600 dark:bg-hookers_green-400 text-hookers_green-200 dark:text-platinum-900 hover:bg-platinum-500 dark:hover:bg-hookers_green-300 transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default DarkModeToggle;