<template>
  <div class="flex flex-col gap-3 px-8 py-5">
    <h3 class="text-title dark:text-dark-title text-lg leading-20px">
      {{ post.title }}
    </h3>
    <div class="text-sm leading-20px font-normal text-[#000000B2] dark:text-dark-subtitle">
      {{ post.body }}
    </div>
    <div class="flex items-center gap-6 self-end py-1">
      <span class="text-sm leading-20px font-normal text-[#000000B2] dark:text-dark-subtitle">
        {{ t('seeMore') }}
      </span>

      <button
        disabled
        class="i-tabler:square-rounded-arrow-right text-primary duration-200 hover:scale-105 active:scale-97"
      ></button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Post } from '@/types/post'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
defineProps<{
  post: Post
}>()
</script>

<i18n lang="yaml">
en:
  seeMore: See More
tr:
  seeMore: Daha Fazla
</i18n>
