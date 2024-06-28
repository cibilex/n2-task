<template>
  <h1 class="font-semibold text-xl leading-none text-[#26303E] pl-9px pr-7">{{ t(title) }}</h1>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
defineProps<{
  title: string
}>()

const { t } = useI18n()
</script>
