<template>
  <div>
    <!-- Demo Notice (only shown when DEMO=true) -->
    <DemoNotice />

    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// Initialize theme on app start
const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});
</script>
