<template>
  <section id="home" class="py-10 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6 max-w-4xl">
      <div
        v-if="data.profile"
        class="flex flex-col lg:flex-row gap-8 items-start"
      >
        <!-- Profile Image -->
        <div class="flex-shrink-0">
          <div class="w-32 h-32 rounded-2xl overflow-hidden">
            <img
              v-if="avatarUrl"
              :src="avatarUrl"
              :alt="`${data.profile.name} Profile Photo`"
              class="w-full h-full object-cover"
            />
            <div
              v-else
              class="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
            >
              <Icon name="lucide:user" class="w-16 h-16 text-gray-400" />
            </div>
          </div>
        </div>

        <!-- Personal Info -->
        <div class="flex-1 space-y-4">
          <div>
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {{ data.profile.name }}
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-4">
              {{ data.profile.title }}
            </p>
            <p
              class="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              {{ data.profile.description }}
            </p>
          </div>

          <!-- Contact Info -->
          <div
            class="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400"
          >
            <a
              v-if="data.profile.email"
              :href="`mailto:${data.profile.email}`"
              class="hover:text-gray-900 dark:hover:text-white"
            >
              {{ data.profile.email }}
            </a>
            <a
              v-if="data.profile.phone"
              :href="`tel:${data.profile.phone}`"
              class="hover:text-gray-900 dark:hover:text-white"
            >
              {{ data.profile.phone }}
            </a>
            <span v-if="data.profile.location">{{
              data.profile.location
            }}</span>
          </div>

          <!-- Social Links -->
          <div class="flex gap-4">
            <a
              v-if="data.profile.linkedin"
              :href="data.profile.linkedin"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="lucide:linkedin" class="w-5 h-5" />
            </a>
            <a
              v-if="data.profile.github"
              :href="data.profile.github"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="lucide:github" class="w-5 h-5" />
            </a>
            <a
              v-if="data.profile.twitter"
              :href="data.profile.twitter"
              class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="proicons:x-twitter" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Fallback state -->
      <div v-else class="flex items-center justify-center py-20">
        <div class="text-gray-500 dark:text-gray-400">
          No profile data available
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data, getFileUrl } = useDataStore();

const avatarUrl = computed(() => {
  if (data.value.profile?.avatar) {
    return getFileUrl(data.value.profile, data.value.profile.avatar);
  }
  return null;
});
</script>
