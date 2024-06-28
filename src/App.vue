<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { LocalItems, Themes } from './data/enums'
import { useMetaStore } from './stores/theme'
const metaStore = useMetaStore()
const { availableLocales, locale } = useI18n()
const currLocale = localStorage.getItem(LocalItems.LANG) || navigator.language
if (currLocale && availableLocales.includes(currLocale)) {
  locale.value = currLocale
  localStorage.setItem(LocalItems.LANG, locale.value)
} else {
  locale.value = 'tr'
  localStorage.setItem(LocalItems.LANG, locale.value)
}

if (
  localStorage.theme === Themes.DARK ||
  (!(LocalItems.THEME in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  metaStore.changeTheme(Themes.DARK)
} else {
  metaStore.changeTheme(Themes.LIGHT)
}
</script>

<template>
  <RouterView />
</template>
