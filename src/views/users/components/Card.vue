<template>
  <router-link
    :to="{
      name: 'users',
      params: {
        id: user.id
      }
    }"
    class="hover:(shadow-[0px_0px_48px_0px_#55555540] cursor-pointer) active:scale-96 duration-200 rounded-3 border border-[#D8D9DD] px-6 py-5"
  >
    <CardHeader :user />

    <div class="flex flex-col gap-2 mt-8">
      <InfoBlock title="location" icon="i-tabler:map-pin-heart">
        {{ user.address.street }} <br />{{ user.address.zipcode }} {{ user.address.city }}
      </InfoBlock>

      <InfoBlock title="company" icon="i-tabler:building-skyscraper">
        {{ user.company.name }} <br />
        {{ user.company.bs }}
      </InfoBlock>

      <InfoBlock title="website" icon="i-tabler:world-share"> {{ user.website }} </InfoBlock>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { type User } from '@/types/user'
import InfoBlock from '@/views/users/components/InfoBlock.vue'
import CardHeader from '@/views/users/components/CardHeader.vue'
defineProps<{
  user: User
}>()
</script>
