<template>
  <PageContent :loading>
    <div class="flex flex-col capitalize word-spacing-[0.02em]">
      <div v-for="post in posts" class="flex flex-col gap-3 px-8 py-5" :id="`${post.id}`">
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
    </div>
  </PageContent>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from '@/lib/axios'
import { type Post } from '@/types/post'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const route = useRoute()
const posts = ref<Post[]>([])
const loading = ref(true)

const getUsers = async () => {
  try {
    const userId = route.params.id

    const res = await axios.get<Post[]>(`/posts?userId=${userId}`)

    posts.value = res.data
  } catch (err) {
    console.log(err)
  }
  loading.value = false
}

onMounted(() => getUsers())
</script>

<i18n lang="yaml">
en:
  seeMore: See More
tr:
  seeMore: Daha Fazla
</i18n>
