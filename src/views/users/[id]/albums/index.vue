<template>
  <PageContent :loading>
    <div class="card-container">
      <div
        v-for="album in albums"
        :key="album.id"
        class="hover:(shadow-[0px_0px_48px_0px_#55555540] cursor-pointer) active:scale-96 duration-200 rounded-3 border border-border dark:border-dark-border p-5"
      >
        <div class="grid grid-cols-2 grid-rows-2">
          <img v-for="item in 4" :key="item" class="object-cover w-full" :src="`/album/${item}.png`" alt="" />
        </div>
        <h4
          class="font-roboto max-w-70% line-clamp-1 mt-4 text-sm first-letter:uppercase leading-20px text-title dark:text-dark-title"
        >
          {{ album.title }}
        </h4>
      </div>
    </div>
  </PageContent>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from '@/lib/axios'
import { type Album } from '@/types/album'
import { useRoute } from 'vue-router'

const route = useRoute()
const albums = ref<Album[]>([])
const loading = ref(true)

const getAlbums = async () => {
  try {
    const userId = route.params.id

    const res = await axios.get<Album[]>(`/albums?userId=${userId}`)

    albums.value = res.data
  } catch (err) {
    console.log(err)
  }
  loading.value = false
}

onMounted(() => getAlbums())
</script>
