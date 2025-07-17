import PocketBase from 'pocketbase';

const POCKETBASE_URL = process.env.POCKETBASE_URL;

export default defineEventHandler(async (event) => {
  try {
    const pb = new PocketBase(POCKETBASE_URL);

    // Fetch only the profile data to get availability status
    const profiles = await pb
      .collection('profile')
      .getFullList()
      .catch(() => []);

    const profile = profiles[0];

    return {
      available: profile?.available ?? false,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error fetching availability:', error);

    // Return default availability status on error
    return {
      available: false,
      timestamp: new Date().toISOString(),
    };
  }
});
