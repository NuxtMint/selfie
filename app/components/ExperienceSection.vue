<template>
  <section id="experience" class="py-12 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6 max-w-4xl">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Experience
      </h2>

      <div v-if="data.experience.length > 0" class="space-y-8">
        <div v-for="job in data.experience" :key="job.id" class="flex gap-6">
          <div
            class="flex-shrink-0 w-20 text-sm text-gray-500 dark:text-gray-400 pt-1"
          >
            {{ job.period }}
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ job.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-2">
              {{ job.company }}
            </p>
            <p
              class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3"
            >
              {{ job.description }}
            </p>
            <div
              v-if="job.technologies && job.technologies.length > 0"
              class="flex flex-wrap gap-2"
            >
              <span
                v-for="tech in job.technologies"
                :key="tech"
                class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="flex items-center justify-center py-20">
        <div class="text-gray-500 dark:text-gray-400">
          No experience data available
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data } = useDataStore();
</script>
