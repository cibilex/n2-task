<template>
  <div class="flex justify-between items-center pr-7">
    <div class="flex items-center gap-15px">
      <router-link
        v-if="prevBtn"
        :to="{ name: 'users' }"
        class="i-tabler:square-rounded-arrow-left duration-200 hover:scale-105 active:scale-97"
      ></router-link>

      <h1 class="font-semibold text-xl leading-none text-title dark:text-dark-title pl-9px">{{ t(title) }}</h1>
    </div>

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
withDefaults(
  defineProps<{
    title: string
    prevBtn: boolean
  }>(),
  {
    prevBtn: true
  }
)

const { t } = useI18n()
</script>
