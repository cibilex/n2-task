<template>
  <div v-if="user" class="px-4 gap-3 flex h-48px">
    <div
      class="w-12 h-12 aspect-square shrink-0 grow-0 rounded-full no-repeat bg-cover bg-white dark:bg-dark-bg"
      :style="`background-image:url(/users/${user.id % 3}.png)`"
    ></div>
    <div>
      <h4 class="font-medium text-title dark:(text-dark-title) text-lg leading-27px">{{ user.name }}</h4>
      <span class="font-light text-subtitle dark:(text-dark-subtitle) text-sm leading-14px">{{ user.email }}</span>
    </div>
  </div>
  <span v-else></span>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { type User } from '@/types/user'
import axios from '@/lib/axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const user = ref<User | null>(null)

const getUser = async () => {
  try {
    const userId = route.params.id
    const res = await axios.get<User>(`/users/${userId}`)

    user.value = res.data
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => getUser())
</script>
