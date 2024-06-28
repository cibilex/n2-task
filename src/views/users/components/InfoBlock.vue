<template>
  <div>
    <div class="flex gap-3 items-center text-title dark:text-dark-title">
      <div :class="icon"></div>
      <span class="font-medium text-sm leading-21px">{{ t(title) }}</span>
    </div>
    <span
      class="font-light text-sm mt-2 leading-none text-subtitle dark:text-dark-subtitle leading-none max-w-60% inline-block"
    >
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps<{
  title: string
  icon: string
}>()
</script>

<style lang="scss" scoped></style>
