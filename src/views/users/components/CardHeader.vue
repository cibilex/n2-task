<template>
  <div class="flex gap-6 items-center">
    <div
      class="w-100px aspect-square shrink-0 grow-0 rounded-full no-repeat bg-cover bg-white dark:bg-dark-bg"
      :style="`background-image:url(/users/${user.id % 3}.png)`"
    ></div>
    <div class="flex flex-col gap-2 text-subtitle dark:text-dark-subtitle leading-none">
      <h3 class="text-lg leading-none font-medium dark:text-dark-title text-title">{{ user.name }}</h3>
      <span>{{ user.email }}</span>
      <span>{{ user.phone }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type User } from '@/types/user'

defineProps<{
  user: User
}>()
</script>
