<template>
  <header class="pt-6 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6 max-w-4xl">
      <div class="flex justify-between items-center">
        <!-- Logo & Availability -->
        <div class="flex items-center gap-4">
          <div v-if="data.profile" class="flex items-center gap-2 text-sm">
            <div
              :class="
                data.profile.available
                  ? 'bg-green-500 animate-pulse'
                  : 'bg-red-500'
              "
              class="w-2 h-2 rounded-full"
            ></div>
            <span
              :class="
                data.profile.available
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              "
              class="font-medium"
            >
              {{
                data.profile.available ? 'Available for hire' : 'Not available'
              }}
            </span>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-6">
          <a
            v-for="link in navigationLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Theme Toggle & Mobile Menu -->
        <div class="flex items-center space-x-2">
          <button
            @click="toggleTheme"
            class="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <Icon
              :name="isDark ? 'lucide:sun' : 'lucide:moon'"
              class="w-4 h-4"
            />
          </button>

          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <Icon
              :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
              class="w-4 h-4"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-gray-200 dark:border-gray-700 mt-4 pt-4"
      >
        <div class="space-y-2">
          <a
            v-for="link in navigationLinks"
            :key="link.href"
            :href="link.href"
            @click="isMobileMenuOpen = false"
            class="block py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { isDark, toggleTheme } = useTheme();
const { data } = useDataStore();
const isMobileMenuOpen = ref(false);

// Navigation links
const navigationLinks = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

// Close mobile menu when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement;
    const nav = document.querySelector('nav');
    if (nav && !nav.contains(target)) {
      isMobileMenuOpen.value = false;
    }
  };

  document.addEventListener('click', handleClickOutside);

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });
});
</script>
