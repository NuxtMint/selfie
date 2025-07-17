import PocketBase from 'pocketbase';

const POCKETBASE_URL = process.env.POCKETBASE_URL;

// Cache for 5 minutes
const CACHE_TTL = 5 * 60 * 1000;
let cache: { data: any; timestamp: number } | null = null;

export default defineEventHandler(async (event) => {
  try {
    // Check cache first
    if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
      console.log('Returning cached portfolio data');
      return cache.data;
    }

    console.log('Fetching fresh portfolio data from PocketBase...');

    const pb = new PocketBase(POCKETBASE_URL);

    // Fetch all data in parallel
    const [profile, experience, education, skills, projects] =
      await Promise.all([
        pb
          .collection('profile')
          .getFullList()
          .catch(() => []),
        pb
          .collection('experience')
          .getFullList({ sort: 'order' })
          .catch(() => []),
        pb
          .collection('education')
          .getFullList({ sort: 'order' })
          .catch(() => []),
        pb
          .collection('skills')
          .getFullList({ sort: 'order' })
          .catch(() => []),
        pb
          .collection('projects')
          .getFullList({ sort: 'order' })
          .catch(() => []),
      ]);

    const portfolioData = {
      profile: profile[0] || null,
      experience,
      education,
      skills,
      projects,
      timestamp: Date.now(),
    };

    // Update cache
    cache = {
      data: portfolioData,
      timestamp: Date.now(),
    };

    console.log('Portfolio data fetched successfully:', {
      profile: !!portfolioData.profile,
      experience: portfolioData.experience.length,
      education: portfolioData.education.length,
      skills: portfolioData.skills.length,
      projects: portfolioData.projects.length,
    });

    return portfolioData;
  } catch (error) {
    console.error('Error fetching portfolio data:', error);

    // Return fallback data
    return {
      profile: {
        id: 'fallback',
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
      },
      experience: [],
      education: [],
      skills: [],
      projects: [],
      timestamp: Date.now(),
      error: error.message,
    };
  }
});
