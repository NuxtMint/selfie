export const useTheme = () => {
  const isDark = ref(false);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    updateTheme();
  };

  const updateTheme = () => {
    if (import.meta.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  };

  const initTheme = () => {
    if (import.meta.client) {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      if (savedTheme) {
        isDark.value = savedTheme === 'dark';
      } else {
        isDark.value = systemPrefersDark;
      }

      updateTheme();
    }
  };

  return {
    isDark: readonly(isDark),
    toggleTheme,
    initTheme,
  };
};
