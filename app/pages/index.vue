<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
  >
    <AppHeader />
    <main class="relative overflow-hidden">
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Server-side data fetching with caching
const { data: portfolioData, error } = await useFetch('/api/portfolio', {
  key: 'portfolio-data',
  server: true,
  default: () => ({
    profile: null,
    experience: [],
    education: [],
    skills: [],
    projects: [],
  }),
});

// Initialize the data store
const { data: storeData, getFileUrl, initializeData } = useDataStore();

// Initialize store data if needed
await initializeData();

// Dynamic SEO based on server-fetched data
const profile = portfolioData.value?.profile;
const profileImage = profile?.avatar
  ? getFileUrl(profile, profile.avatar) || '/profile-photo.png'
  : '/profile-photo.png';

const title = profile
  ? `${profile.name} - ${profile.title} | Resume`
  : 'Professional Developer Portfolio | Resume';

const description =
  profile?.description ||
  'Professional developer portfolio and resume showcasing experience and projects.';

// Set SEO meta tags
useHead({
  title,
  meta: [
    { name: 'description', content: description },
    {
      name: 'keywords',
      content:
        'senior developer, full stack developer, resume, CV, React, Vue.js, Node.js, AWS, TypeScript, JavaScript, portfolio',
    },
    { name: 'author', content: profile?.name || 'Professional Developer' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'profile' },
    { property: 'og:image', content: profileImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: profileImage },
  ],
});

// Client-side smooth scrolling
onMounted(() => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href') || '');
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});

// Handle errors
if (error.value) {
  console.error('Error loading portfolio data:', error.value);
}
</script>

<style scoped>
/* Additional custom styles can be added here */
</style>
