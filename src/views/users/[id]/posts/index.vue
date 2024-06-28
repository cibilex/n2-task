<template>
  <PageContent :loading>
    <div class="flex flex-col capitalize word-spacing-[0.02em]">
      <Content v-for="post in posts" :key="post.id" :post="post"> </Content>
    </div>
  </PageContent>
</template>

<script setup lang="ts">
import Content from '@/views/users/[id]/posts/components/Content.vue'
import { onMounted, ref } from 'vue'
import axios from '@/lib/axios'
import { type Post } from '@/types/post'
import { useRoute } from 'vue-router'

const route = useRoute()
const posts = ref<Post[]>([])
const loading = ref(true)

const getAlbums = async () => {
  try {
    const userId = route.params.id

    const res = await axios.get<Post[]>(`/posts?userId=${userId}`)

    posts.value = res.data
  } catch (err) {
    console.log(err)
  }
  loading.value = false
}

onMounted(() => getAlbums())
</script>
