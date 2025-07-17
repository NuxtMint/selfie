import type { RecordModel } from 'pocketbase';

interface PortfolioData {
  profile: RecordModel | null;
  experience: RecordModel[];
  education: RecordModel[];
  skills: RecordModel[];
  projects: RecordModel[];
  timestamp?: number;
  error?: string;
}

// Global reactive state
const portfolioData = ref<PortfolioData>({
  profile: null,
  experience: [],
  education: [],
  skills: [],
  projects: [],
});

const isLoading = ref(false);
const lastFetch = ref<number>(0);
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const useDataStore = () => {
  const { getFileUrl } = usePocketBase();

  // Check if data is fresh (within cache duration)
  const isDataFresh = (): boolean => {
    return Date.now() - lastFetch.value < CACHE_DURATION;
  };

  // Fetch all portfolio data from server-side API
  const fetchPortfolioData = async (force = false): Promise<PortfolioData> => {
    // Return cached data if fresh and not forcing refresh
    if (!force && isDataFresh() && portfolioData.value.profile) {
      console.log('Using cached portfolio data');
      return portfolioData.value;
    }

    if (isLoading.value) {
      console.log('Already loading, waiting for current request...');
      // Wait for current request to complete
      while (isLoading.value) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      return portfolioData.value;
    }

    isLoading.value = true;

    try {
      console.log('Fetching portfolio data from server...');

      // Use Nuxt's $fetch
      const data = await $fetch<PortfolioData>('/api/portfolio');

      // Update global state
      portfolioData.value = data;
      lastFetch.value = Date.now();

      console.log('Portfolio data loaded successfully:', {
        profile: !!data.profile,
        experience: data.experience?.length || 0,
        education: data.education?.length || 0,
        skills: data.skills?.length || 0,
        projects: data.projects?.length || 0,
      });

      return data;
    } catch (error) {
      console.error('Error fetching portfolio data:', error);

      // Return existing data or fallback
      if (!portfolioData.value.profile) {
        portfolioData.value = {
          profile: {
            id: 'fallback',
            collectionId: 'profile',
            collectionName: 'profile',
            created: new Date().toISOString(),
            updated: new Date().toISOString(),
            name: 'Your Name',
            title: 'Your Title',
            description: 'Your description goes here...',
            email: 'your.email@example.com',
            phone: '+1 (234) 567-890',
            location: 'Your Location',
            linkedin: 'https://linkedin.com/in/yourprofile',
            github: 'https://github.com/yourusername',
            twitter: 'https://twitter.com/yourusername',
            available: true,
          } as RecordModel,
          experience: [],
          education: [],
          skills: [],
          projects: [],
          error: error instanceof Error ? error.message : 'Unknown error',
        };
      }

      return portfolioData.value;
    } finally {
      isLoading.value = false;
    }
  };

  // Initialize data on first access
  const initializeData = async (): Promise<void> => {
    if (!portfolioData.value.profile) {
      await fetchPortfolioData();
    }
  };

  // Refresh data (force fetch)
  const refreshData = async (): Promise<PortfolioData> => {
    return await fetchPortfolioData(true);
  };

  // Clear cache
  const clearCache = (): void => {
    lastFetch.value = 0;
    portfolioData.value = {
      profile: null,
      experience: [],
      education: [],
      skills: [],
      projects: [],
    };
  };

  return {
    // Reactive data
    data: readonly(portfolioData),
    isLoading: readonly(isLoading),

    // Methods
    fetchPortfolioData,
    initializeData,
    refreshData,
    clearCache,
    getFileUrl,

    // Legacy methods for backward compatibility
    fetchProfile: async () => {
      const data = await fetchPortfolioData();
      return data.profile;
    },
    fetchExperience: async () => {
      const data = await fetchPortfolioData();
      return data.experience;
    },
    fetchEducation: async () => {
      const data = await fetchPortfolioData();
      return data.education;
    },
    fetchSkills: async () => {
      const data = await fetchPortfolioData();
      return data.skills;
    },
    fetchProjects: async () => {
      const data = await fetchPortfolioData();
      return data.projects;
    },
  };
};
