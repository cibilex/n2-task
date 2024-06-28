<template>
  <Page :loading>
    <template #navbar>
      <div>
        <Avatar /> <Divider class="mt-19px" />

        <div class="flex gap-6 flex-col pt-14">
          <Link text="todos" icon="i-tabler:checkup-list" :to="{ name: 'users-id-todos' }" />
          <Link text="posts" icon="i-tabler:notebook" :to="{ name: 'users' }" />
          <Link text="albums" icon="i-tabler:photo-heart" :to="{ name: 'users' }" />
        </div></div
    ></template>

    <template #title>
      <PageTitle title="allUsers" />
    </template>

    <div class="flex flex-col">
      <div
        @click="todo.completed = !todo.completed"
        v-for="todo in todos"
        :id="`${todo.id}`"
        class="text-[#485B69] cursor-pointer dark:text-dark-subtitle py-14px text-sm leading-20px font-normal flex gap-15px items-center"
      >
        <div
          :class="todo.completed ? 'border-primary bg-primary' : 'border-title bg-white dark:bg-dark-border'"
          class="shadow border-2 rounded cursor-pointer inline-block overflow-visible grid place-content-center text-white w-5 h-5"
        >
          <div v-if="todo.completed" class="i-tabler:check text-xl text-white -translate-x-0.5 -translate-y-0.5"></div>
        </div>
        <span class="first-letter:capitalize">{{ todo.title }}</span>
      </div>
    </div>
  </Page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Card from '@/views/users/components/Card.vue'
import axios from '@/lib/axios'
import { type Todo } from '@/types/todo'
import { useRoute } from 'vue-router'
import Avatar from '@/components/global/Avatar.vue'

const route = useRoute()
const todos = ref<Todo[]>([])
const loading = ref(true)

const getUsers = async () => {
  try {
    const userId = route.params.id

    const res = await axios.get<Todo[]>(`/todos?userId=${userId}`)
    todos.value = res.data
  } catch (err) {
    console.log(err)
  }
  loading.value = false
}

onMounted(() => getUsers())
</script>
