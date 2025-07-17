export default defineNuxtPlugin(async () => {
  // Initialize data store on app start
  const { initializeData } = useDataStore();

  // Initialize data in the background
  // This will fetch all data once and cache it
  if (import.meta.client) {
    setTimeout(() => {
      initializeData().catch(console.error);
    }, 100);
  }
});
