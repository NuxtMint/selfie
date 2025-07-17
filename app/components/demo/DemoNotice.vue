<template>
  <!-- Compact demo notice with NuxtMint colors -->
  <div
    v-if="showDemo"
    class="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg border-b border-emerald-400/30"
    style="z-index: 9999"
  >
    <div class="px-4 py-2">
      <div class="flex items-center justify-between">
        <!-- Demo Info -->
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2">
            <Icon name="lucide:sparkles" class="w-4 h-4 text-emerald-200" />
            <span class="font-medium text-sm font-semibold"
              >This is a live Demo</span
            >
            <span>-</span>
            <span class="text-sm">Nuxt 4 + PocketBase + TailwindCSS</span>
          </div>
          <div
            class="hidden lg:flex items-center gap-3 text-xs text-emerald-100"
          ></div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-2">
          <a
            href="https://nuxtmint.com"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-white/15 hover:bg-white/25 rounded-md text-xs font-medium transition-all duration-200 hover:scale-105"
          >
            <Icon name="lucide:external-link" class="w-3 h-3" />
            <span>Get Template</span>
          </a>

          <!-- Close Button -->
          <button
            @click="dismissDemo"
            class="p-1 hover:bg-white/15 rounded-md transition-colors group"
            title="Dismiss demo notice"
          >
            <Icon
              name="lucide:x"
              class="w-3.5 h-3.5 group-hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>

      <!-- Mobile-only compact info -->
      <div
        class="sm:hidden mt-1 flex items-center gap-2 text-xs text-emerald-100"
      >
        <Icon name="lucide:code" class="w-3 h-3" />
        <span>Nuxt Portfolio Template Demo</span>
      </div>
    </div>
  </div>

  <!-- Spacer to push content down when demo notice is visible -->
  <div v-if="showDemo" class="h-12 sm:h-10"></div>
</template>

<script setup lang="ts">
// Get runtime config to access environment variables
const runtimeConfig = useRuntimeConfig();

const isDemoMode = computed(() => {
  // For testing, always show in development
  // In production, check for DEMO=true environment variable
  return (
    process.env.NODE_ENV === 'development' ||
    runtimeConfig.public.demo === 'true'
  );
});

const isDismissed = ref(false);

// Dismiss demo notice
const dismissDemo = () => {
  isDismissed.value = true;
  // Store dismissal in localStorage
};

// Check if demo was previously dismissed
onMounted(() => {
  if (import.meta.client) {
    const dismissed = localStorage.getItem('demo-dismissed');
    const dismissedTime = localStorage.getItem('demo-dismissed-time');

    if (dismissed === 'true' && dismissedTime) {
      const now = Date.now();
      const oneDayMs = 24 * 60 * 60 * 1000;

      // Check if 24 hours have passed
      if (now - parseInt(dismissedTime) < oneDayMs) {
        isDismissed.value = true;
      } else {
        // Reset after 24 hours
        localStorage.removeItem('demo-dismissed');
        localStorage.removeItem('demo-dismissed-time');
      }
    }
  }
});

// Computed to show/hide the component
const showDemo = computed(() => isDemoMode.value && !isDismissed.value);
</script>

<style scoped>
/* Ensure maximum z-index */
.z-50 {
  z-index: 50;
}
</style>
