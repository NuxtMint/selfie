<template>
  <footer
    class="py-8 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
  >
    <div class="container mx-auto px-6 max-w-4xl">
      <div
        class="flex flex-col md:flex-row justify-between items-center text-sm"
      >
        <p class="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
          © {{ new Date().getFullYear() }}
          {{ data.profile?.name || 'Your Name' }}. All rights reserved.
        </p>

        <div v-if="data.profile" class="flex gap-4">
          <a
            v-if="data.profile.github"
            :href="data.profile.github"
            class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            target="_blank"
            aria-label="GitHub"
          >
            <Icon name="lucide:github" class="w-4 h-4" />
          </a>
          <a
            v-if="data.profile.linkedin"
            :href="data.profile.linkedin"
            class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Icon name="lucide:linkedin" class="w-4 h-4" />
          </a>
          <a
            v-if="data.profile.twitter"
            :href="data.profile.twitter"
            class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            target="_blank"
            aria-label="X (formerly Twitter)"
          >
            <Icon name="lucide:x" class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { data } = useDataStore();
</script>
