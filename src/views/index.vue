<template>
  <div></div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
const router = useRouter()
onMounted(() => router.push('/users'))
</script>

<style lang="scss" scoped></style>
