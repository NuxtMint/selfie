import PocketBase from 'pocketbase';

export const usePocketBase = () => {
  const config = useRuntimeConfig();
  const pb = new PocketBase(config.public.pocketbaseUrl);

  return {
    pb,

    // Profile methods
    async getProfile() {
      try {
        console.log('PocketBase URL:', config.public.pocketbaseUrl);
        console.log('Attempting to fetch profile...');

        // Add timeout to prevent hanging requests
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Request timeout')), 10000);
        });

        const profilePromise = pb.collection('profile').getFullList();

        const profiles = (await Promise.race([
          profilePromise,
          timeoutPromise,
        ])) as any[];

        console.log('Profiles fetched:', profiles);
        return profiles[0] || null;
      } catch (error: any) {
        console.error('Profile fetch error:', error);
        // Don't log auto-cancellation errors as they're expected
        if (!error.message?.includes('autocancelled')) {
          console.error('Error fetching profile:', error);
        }
        return null;
      }
    },

    // Experience methods
    async getExperience() {
      try {
        return await pb.collection('experience').getFullList({
          sort: 'order',
        });
      } catch (error) {
        console.error('Error fetching experience:', error);
        return [];
      }
    },

    // Education methods
    async getEducation() {
      try {
        return await pb.collection('education').getFullList({
          sort: 'order',
        });
      } catch (error) {
        console.error('Error fetching education:', error);
        return [];
      }
    },

    // Skills methods
    async getSkills() {
      try {
        return await pb.collection('skills').getFullList({
          sort: 'order',
        });
      } catch (error) {
        console.error('Error fetching skills:', error);
        return [];
      }
    },

    // Projects methods
    async getProjects() {
      try {
        return await pb.collection('projects').getFullList({
          sort: 'order',
        });
      } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
      }
    },

    // Get file URL helper
    getFileUrl(record: any, filename: string) {
      if (!record || !filename) return null;
      return pb.files.getUrl(record, filename);
    },
  };
};
