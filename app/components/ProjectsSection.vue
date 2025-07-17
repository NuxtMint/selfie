<template>
  <section id="projects" class="py-12 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6 max-w-4xl">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Projects
      </h2>

      <div v-if="data.projects.length > 0" class="space-y-8">
        <div
          v-for="project in data.projects"
          :key="project.id"
          class="flex gap-6"
        >
          <div
            class="flex-shrink-0 w-20 text-sm text-gray-500 dark:text-gray-400 pt-1"
          >
            {{ project.year }}
          </div>
          <div class="flex-1">
            <div class="flex items-start justify-between mb-2">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ project.title }}
              </h3>
              <div class="flex gap-3 ml-4">
                <a
                  v-if="project.github"
                  :href="project.github"
                  class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="lucide:github" class="w-4 h-4" />
                </a>
                <a
                  v-if="project.live"
                  :href="project.live"
                  class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="lucide:external-link" class="w-4 h-4" />
                </a>
              </div>
            </div>
            <p
              v-if="project.role"
              class="text-gray-600 dark:text-gray-400 mb-2"
            >
              {{ project.role }}
            </p>
            <p
              class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3"
            >
              {{ project.description }}
            </p>
            <div
              v-if="project.technologies && project.technologies.length > 0"
              class="flex flex-wrap gap-2"
            >
              <span
                v-for="tech in project.technologies"
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
          No projects data available
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data } = useDataStore();
</script>
