<template>
  <div class="flex gap-6 items-center">
    <div
      class="w-100px aspect-square shrink-0 grow-0 rounded-full repeat-o bg-center bg-white"
      :style="`background-image:url(/users/${user.id % 3}.png)`"
    ></div>
    <div class="flex flex-col gap-2 text-[#5C6672] leading-none">
      <h3 class="text-lg leading-none font-medium text-[#26303E]">{{ user.name }}</h3>
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
