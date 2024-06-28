<template>
  <div class="pt-35px overflow-scroll h-full pr-7">
    <Loader v-if="loading" />

    <slot v-else />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  loading: boolean
}>()
</script>
