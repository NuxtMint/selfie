<template>
  <section id="education" class="py-12 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6 max-w-4xl">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Education
      </h2>

      <div v-if="data.education.length > 0" class="space-y-6">
        <div v-for="edu in data.education" :key="edu.id" class="flex gap-6">
          <div
            class="flex-shrink-0 w-20 text-sm text-gray-500 dark:text-gray-400 pt-1"
          >
            {{ edu.period }}
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ edu.degree }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-2">
              {{ edu.school }}
            </p>
            <p
              class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3"
            >
              {{ edu.description }}
            </p>
            <div
              v-if="edu.achievements && edu.achievements.length > 0"
              class="flex flex-wrap gap-2"
            >
              <span
                v-for="achievement in edu.achievements"
                :key="achievement"
                class="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
              >
                {{ achievement }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="flex items-center justify-center py-20">
        <div class="text-gray-500 dark:text-gray-400">
          No education data available
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { data } = useDataStore();
</script>
