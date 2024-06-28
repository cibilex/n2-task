<template>
  <Page>
    <template #navbar> <Link text="users" icon="i-tabler:users" :to="{ name: 'users' }" /> </template>

    <template #title>
      <PageTitle :prevBtn="false" title="allUsers" />
    </template>

    <PageContent :loading>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        <Card v-for="user in users" :key="user.id" :user />
      </div>
    </PageContent>
  </Page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Card from '@/views/users/components/Card.vue'
import axios from '@/lib/axios'
import { type User } from '@/types/user'

const users = ref<User[]>([])
const loading = ref(true)

const getUsers = async () => {
  try {
    const res = await axios.get<User[]>('/users')
    users.value = res.data
  } catch (err) {
    console.log(err)
  }
  loading.value = false
}

onMounted(() => getUsers())
</script>
