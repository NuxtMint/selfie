<template>
  <section id="skills" class="py-12 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6 max-w-4xl">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Skills
      </h2>

      <div v-if="data.skills.length > 0" class="grid md:grid-cols-3 gap-8">
        <div v-for="category in data.skills" :key="category.id">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {{ category.category }}
          </h3>
          <div
            v-if="category.skills && category.skills.length > 0"
            class="flex flex-wrap gap-2"
          >
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="flex items-center justify-center py-20">
        <div class="text-gray-500 dark:text-gray-400">
          No skills data available
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { data } = useDataStore();
</script>
