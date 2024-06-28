<template>
  <div class="grid grid-cols-[260px_auto] grid-rows-1 h-screen w-screen overflow-hidden">
    <nav
      class="bg-[#F5F5F5] dark:bg-dark-bg py-8 border-r border-border dark:border-dark-border flex flex-col justify-between"
    >
      <slot name="navbar" />

      <Logo />
    </nav>

    <div>
      <div class="p-7 pr-0 pt-44px h-full dark:bg-dark-bg">
        <PageTitle title="allUsers" />

        <div class="pt-35px overflow-scroll h-full pr-7">
          <Loader v-if="loading" />

          <slot v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue'
defineProps<{
  loading: boolean
}>()
</script>
