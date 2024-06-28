<template>
  <div class="flex justify-between pr-7">
    <h1 class="font-semibold text-xl leading-none text-title dark:text-dark-title pl-9px">{{ t(title) }}</h1>

    <div class="flex gap-2">
      <ThemeSelector />
      <LanguageSelector />
    </div>
  </div>
</template>

<script setup lang="ts">
import LanguageSelector from '@/components/LanguageSelector.vue'
import ThemeSelector from '@/components/ThemeSelector.vue'
import { useI18n } from 'vue-i18n'
defineProps<{
  title: string
}>()

const { t } = useI18n()
</script>
